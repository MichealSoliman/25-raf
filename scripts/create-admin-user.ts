#!/usr/bin/env npx tsx

/**
 * Create Admin User Script (Fixed)
 * Uses the actual User model from the project
 */

// Load env FIRST
import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
  console.error('❌ MONGODB_URI is not defined')
  process.exit(1)
}

// Define schema with comparePassword method (matching lib/models/User.ts)
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  name: { type: String, required: true, trim: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  isActive: { type: Boolean, default: true },
  lastLogin: { type: Date }
}, { timestamps: true })

// Add comparePassword method
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password)
}

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)

async function createAdmin() {
  console.log('🚀 Creating admin user with proper schema...')

  try {
    await mongoose.connect(MONGODB_URI)
    console.log('✅ Connected to MongoDB')

    // Delete all admins first
    await UserModel.deleteMany({ role: 'admin' })
    console.log('🗑️  Deleted existing admin users')

    // Hash password
    const plainPassword = '25Project@raf'
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(plainPassword, salt)

    // Create admin
    const admin = await UserModel.create({
      name: 'مدير النظام',
      email: '25-project@raf-advanced.sa',
      password: hashedPassword,
      role: 'admin',
      isActive: true
    })

    // Verify password works
    const testPassword = await bcrypt.compare(plainPassword, admin.password)
    console.log(`🔐 Password verification: ${testPassword ? '✅ PASSED' : '❌ FAILED'}`)

    console.log('\n🎉 Admin created successfully!')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('📧 Email:    25-project@raf-advanced.sa')
    console.log('🔑 Password: 25Project@raf')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  } finally {
    await mongoose.disconnect()
    console.log('🔌 Disconnected')
  }
}

createAdmin()

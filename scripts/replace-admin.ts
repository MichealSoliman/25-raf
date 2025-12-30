#!/usr/bin/env npx tsx

/**
 * Replace Admin User Script
 * Deletes old admin and creates new one with updated email
 */

import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI is not defined in .env file')
    process.exit(1)
}

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    isActive: { type: Boolean, default: true },
    lastLogin: { type: Date }
}, { timestamps: true })

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)

async function replaceAdmin() {
    console.log('🚀 Replacing admin user...')

    try {
        await mongoose.connect(MONGODB_URI)
        console.log('✅ Connected to MongoDB')

        // Delete ALL admin users
        const deleted = await UserModel.deleteMany({ role: 'admin' })
        console.log(`🗑️  Deleted ${deleted.deletedCount} existing admin user(s)`)

        // Create new admin with correct email
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash('25Project@raf', salt)

        await UserModel.create({
            name: 'مدير النظام',
            email: '25-project@raf-advanced.sa',
            password: hashedPassword,
            role: 'admin',
            isActive: true
        })

        console.log('\n🎉 New admin user created!')
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
        console.log('📧 Email:    25-project@raf-advanced.sa')
        console.log('🔑 Password: 25Project@raf')
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')

    } catch (error) {
        console.error('❌ Error:', error)
        process.exit(1)
    } finally {
        await mongoose.disconnect()
        console.log('🔌 Disconnected from MongoDB')
    }
}

replaceAdmin()

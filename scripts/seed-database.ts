#!/usr/bin/env npx tsx

/**
 * Seed Script: Initialize MongoDB with Default Data
 * 
 * This script seeds the MongoDB database with all default data from website-data.ts
 * Run this to populate a fresh database with initial content
 * 
 * Usage:
 * npm run seed
 * or
 * npx tsx scripts/seed-database.ts
 */

import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || ''

if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI is not defined in .env file')
    process.exit(1)
}

// Define the WebsiteData schema
const WebsiteDataSchema = new mongoose.Schema({
    project: {
        name: String,
        licenseNumber: String,
        unifiedNumber: String,
        description: String,
        address: String
    },
    apartments: [{
        id: String,
        name: String,
        price: String,
        area: String,
        rooms: Number,
        bathrooms: Number,
        features: [String],
        popular: Boolean,
        image: String
    }],
    location: {
        address: String,
        mapUrl: String,
        features: [{
            title: String,
            time: String,
            icon: String
        }]
    },
    contact: {
        phone: String,
        whatsapp: String,
        email: String
    },
    socialMedia: [{
        platform: String,
        url: String,
        icon: String
    }],
    strategicFeatures: [{
        icon: String,
        title: String,
        description: String,
        details: [String],
        isMain: Boolean
    }],
    projectHighlights: [{
        icon: String,
        title: String
    }],
    trustFactors: [{
        text: String,
        icon: String
    }],
    hero: {
        title: String,
        subtitle: String,
        location: String,
        startingPrice: String,
        backgroundImage: String
    },
    imageCarousel: {
        title: String,
        subtitle: String,
        images: [{
            src: String,
            alt: String,
            title: String
        }]
    },
    contactSection: {
        title: String,
        subtitle: String,
        phone: String,
        whatsapp: String,
        email: String,
        workingHours: {
            weekdays: String,
            friday: String
        },
        formSettings: {
            showName: Boolean,
            showPhone: Boolean,
            showEmail: Boolean,
            showMessage: Boolean
        }
    },
    trustIndicators: {
        title: String,
        subtitle: String,
        guarantees: [{
            icon: String,
            title: String,
            subtitle: String,
            description: String
        }],
        trustFactors: [String]
    },
    whatsappCTA: {
        title: String,
        subtitle: String,
        phone: String,
        message: String,
        variant: String,
        showPhone: Boolean,
        showMessage: Boolean
    },
    whatsappSection: {
        title: String,
        subtitle: String,
        features: [{
            icon: String,
            title: String,
            description: String
        }],
        phone: String,
        message: String
    }
}, { timestamps: true })

const WebsiteDataModel = mongoose.models.WebsiteData || mongoose.model('WebsiteData', WebsiteDataSchema)

// Complete default data for seeding
const defaultData = {
    project: {
        name: "مشروع راف 25",
        licenseNumber: "I20002693",
        unifiedNumber: "920031103",
        description: "مشروع سكني فاخر في حي الزهراء، جدة",
        address: "حي الزهراء، جدة، المملكة العربية السعودية"
    },
    apartments: [
        {
            id: "A",
            name: "نموذج A - واجهة أمامية",
            price: "890,000",
            area: "155",
            rooms: 4,
            bathrooms: 4,
            features: ["غرفة استقبال", "2 غرفة نوم", "4 دورات مياه", "مجلس نساء", "مطبخ", "غرفة سائق", "غرفة خادمة"],
            popular: true,
            image: "/a.jpg",
        },
        {
            id: "B",
            name: "نموذج B - واجهة خلفية",
            price: "870,000",
            area: "151",
            rooms: 4,
            bathrooms: 4,
            features: ["غرفة استقبال", "2 غرفة نوم", "مجلس", "مطبخ", "4 دورات مياه", "غرفة خادمة", "غرفة سائق"],
            popular: false,
            image: "/b.jpg",
        },
        {
            id: "C",
            name: "نموذج C - واجهة خلفية",
            price: "870,000",
            area: "151",
            rooms: 4,
            bathrooms: 4,
            features: ["2 غرفة نوم", "مجلس", "مطبخ", "4 دورات مياه", "غرفة سائق"],
            popular: false,
            image: "/c.jpg",
        },
        {
            id: "D",
            name: "نموذج D - واجهة أمامية",
            price: "890,000",
            area: "155",
            rooms: 4,
            bathrooms: 4,
            features: ["2 غرفة نوم", "مجلس", "مطبخ", "4 دورات مياه", "غرفة خادمة", "غرفة سائق"],
            popular: false,
            image: "/d.jpg",
        }
    ],
    location: {
        address: "حي الزهراء، جدة، المملكة العربية السعودية",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3709.9005761511416!2d39.14023258505769!3d21.589803685697152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDM1JzIzLjMiTiAzOcKwMDgnMTcuMCJF!5e0!3m2!1sar!2seg!4v1755078085233!5m2!1sar!2seg",
        features: [
            { title: "قريب من الواجهة البحرية", time: "8 دقائق", icon: "MapPin" },
            { title: "قريب من المطار", time: "10 دقائق", icon: "Plane" },
            { title: "شوارع رئيسية", time: "مباشر", icon: "Car" },
            { title: "مركز المدينة", time: "20 دقيقة", icon: "Clock" }
        ]
    },
    contact: {
        phone: "+966536667967",
        whatsapp: "+966536667967",
        email: "info@rafco.sa"
    },
    socialMedia: [
        { platform: "TikTok", url: "https://www.tiktok.com/@raf_grope?_t=ZS-8ys0flOq8uW&_r=1", icon: "TikTok" },
        { platform: "Snapchat", url: "https://www.snapchat.com/add/rafgrope?sender_web_id=10a7b6f1-3aeb-4830-b990-cf1445633817&device_type=desktop&is_copy_url=true", icon: "Snapchat" },
        { platform: "Instagram", url: "https://www.instagram.com/rafgrope/", icon: "Instagram" },
        { platform: "X (Twitter)", url: "https://x.com/Rafgrope", icon: "Twitter" }
    ],
    strategicFeatures: [
        {
            icon: "MapPin",
            title: "موقع إستراتيجي وسط 3 شوارع رئيسية",
            
            details: ["شارع حلمي كتبي", "طريق الأمير سلطان", "شارع عبد الله كاظم","شارع عبد الله جاسر"],
            isMain: true,
        },
        {
            icon: "Building2",
            title: " المسجد",
            isMain: false,
        },
        {
            icon: "TreePine",
            title: "حدائق ومتنزهات",
            isMain: false,
        },
        {
            icon: "School",
            title: "مدارس متميزة",
            isMain: false,
        },
        {
            icon: "Stethoscope",
            title: "مستشفى قريب",
            isMain: false,
        },
        {
            icon: "Stethoscope",
            title: " مراكز تجارية ",
            isMain: false,
        },
        
    ],
    projectHighlights: [
        { icon: "Shield", title: "بيئة سكنية متكاملة" },
        { icon: "LucideSnowflake", title: "مداخل مكيفة" },
        { icon: "Camera", title: "كاميرات مراقبة" },
        { icon: "Wifi", title: "سمارت هوم" },
        { icon: "Users", title: "تصميم مودرن" },
        { icon: "MapPin", title: "موقع مثالي" },
    ],
    trustFactors: [
        { text: "15 سنة ضمان على الهيكل الإنشائي", icon: "Building2" },
        { text: "25 سنة ضمان على القواطع والأفياش", icon: "Zap" },
        { text: "سنتين ضمان على السباكة", icon: "Droplets" },
        { text: "سنة ضمان على اتحاد الملاك", icon: "Users2" },
    ],
    hero: {
        title: "حقق حلمك",
        subtitle: "بتملك السكن المثالى",
        location: "في جدة - حي الزهراء",
        startingPrice: "870,000",
        backgroundImage: "/banner1.png"
    },
    imageCarousel: {
        title: "معرض الصور",
        subtitle: "",
        images: [
            { src: "/banner.png", alt: "مشروع الزهراء السكني", title: "مشروع راف 25" },
            { src: "/banner1.png", alt: "مشروع الزهراء السكني", title: "مشروع راف 25" },
            { src: "/banner2.png", alt: "مشروع الزهراء السكني", title: "مشروع راف 25" },
            { src: "/banner3.jpg", alt: "مشروع الزهراء السكني", title: "مشروع راف 25" },
            { src: "/banner4.jpg", alt: "مشروع الزهراء السكني", title: "مشروع راف 25" },
            { src: "/banner5.jpg", alt: "مشروع الزهراء السكني", title: "مشروع راف 25" }
        ]
    },
    contactSection: {
        title: "احجز موعد المعاينة",
        subtitle: "تواصل معنا الآن واحجز موعدك لمعاينة المشروع",
        phone: "+966536667967",
        whatsapp: "+966536667967",
        email: " info@rafco.sa",
        workingHours: {
            weekdays: "السبت - الخميس: 9:00 ص - 9:00 م",
            friday: "الجمعة: 2:00 م - 9:00 م"
        },
        formSettings: {
            showName: true,
            showPhone: true,
            showEmail: true,
            showMessage: true
        }
    },
    trustIndicators: {
        title: "ضمانات المشروع",
        subtitle: "نلتزم بأعلى معايير الجودة ونقدم ضمانات شاملة لراحة بالك وثقتك",
        guarantees: [
            { icon: "Shield", title: "15 سنة", subtitle: "الهيكل الإنشائي", description: "ضمان شامل على جودة البناء" },
            { icon: "Award", title: "25 سنة", subtitle: "قواطع وأفياش", description: "ضمان الأعمال الكهربائية" },
            { icon: "Clock", title: "سنتين", subtitle: "أعمال السباكة", description: "ضمان شامل للسباكة" },
            { icon: "Users", title: "سنة", subtitle: "اتحاد ملاك", description: "عضوية اتحاد الملاك" }
        ],
        trustFactors: [
            "مطور عقاري معتمد",
            "رخصة بناء سارية",
            "تأمين شامل على المشروع",
            "فريق هندسي متخصص",
            "مواد بناء عالية الجودة",
            "التزام بمواعيد التسليم"
        ]
    },
    whatsappCTA: {
        title: "تواصل معنا الآن",
        subtitle: "احصل على استشارة مجانية وتفاصيل المشروع",
        phone: "+966536667967",
        message: "مرحباً، أريد معرفة المزيد عن مشروع راف 25",
        variant: "primary",
        showPhone: true,
        showMessage: true
    },
    whatsappSection: {
        title: "مميزات مشروع راف 25",
        subtitle: "تمتع بالميزات التي تجمع بين الراحة والأمان",
        features: [
            { icon: "Shield", title: "بيئة سكنية متكاملة", description: "تم تصميم المبنى ليكون مناسباً للاستقرار والراحة" },
            { icon: "LucideSnowflake", title: "مداخل مكيفة", description: "تم تصميم المبنى ليكون مناسباً للاستقرار والراحة" },
            { icon: "Camera", title: "كاميرات مراقبة", description: "تم تصميم المبنى ليكون مناسباً للاستقرار والراحة" },
            { icon: "Wifi", title: "سمارت هوم", description: "تم تصميم المبنى ليكون مناسباً للاستقرار والراحة" },
            { icon: "Users", title: "تصميم مودرن", description: "تم تصميم المبنى ليكون مناسباً للاستقرار والراحة" },
            { icon: "MapPin", title: "موقع مثالي", description: "تم تصميم المبنى ليكون مناسباً للاستقرار والراحة" }
        ],
        phone: "+966536667967",
        message: "مرحباً، أريد معرفة المزيد عن مشروع راف 25"
    }
}

async function seedDatabase() {
    console.log('🚀 Starting database seeding...')
    console.log(`📍 Connecting to: ${MONGODB_URI.substring(0, 30)}...`)

    try {
        // Connect to MongoDB
        await mongoose.connect(MONGODB_URI)
        console.log('✅ Connected to MongoDB successfully!')

        // Clear existing data
        console.log('🗑️  Clearing existing website data...')
        await WebsiteDataModel.deleteMany({})
        console.log('✅ Cleared existing data')

        // Insert new data
        console.log('💾 Inserting seed data...')
        const result = await WebsiteDataModel.create(defaultData)
        console.log('✅ Seed data inserted successfully!')

        // Verify
        console.log('\n📊 Seeded data summary:')
        console.log(`   - Project: ${result.project.name}`)
        console.log(`   - Apartments: ${result.apartments.length} units`)
        console.log(`   - Strategic Features: ${result.strategicFeatures.length} items`)
        console.log(`   - Project Highlights: ${result.projectHighlights.length} items`)
        console.log(`   - Trust Factors: ${result.trustFactors.length} items`)
        console.log(`   - Social Media: ${result.socialMedia.length} platforms`)
        console.log(`   - Carousel Images: ${result.imageCarousel.images.length} images`)

        console.log('\n🎉 Database seeding completed successfully!')

    } catch (error) {
        console.error('❌ Seeding failed:', error)
        console.log('\n🔧 Troubleshooting:')
        console.log('1. Check that MONGODB_URI in .env is correct')
        console.log('2. Ensure your IP is whitelisted in MongoDB Atlas')
        console.log('3. Verify the database user credentials')
        process.exit(1)
    } finally {
        await mongoose.disconnect()
        console.log('🔌 Disconnected from MongoDB')
    }
}

seedDatabase()

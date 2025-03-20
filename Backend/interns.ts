import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.internships.createMany({
    data: [
      {
        company_name: "Google",
        position: "Software Engineer Intern",
        location: "Gurgaon, India",
        stipend: 20000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Microsoft",
        position: "Data Analyst Intern",
        location: "Hyderabad, India",
        stipend: 25000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Amazon",
        position: "Marketing Intern",
        location: "Bangalore, India",
        stipend: 22000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Facebook",
        position: "UX/UI Design Intern",
        location: "Mumbai, India",
        stipend: 24000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Apple",
        position: "Hardware Engineer Intern",
        location: "Delhi, India",
        stipend: 30000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Tesla",
        position: "Mechanical Engineer Intern",
        location: "Chennai, India",
        stipend: 28000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Netflix",
        position: "Content Writer Intern",
        location: "Kolkata, India",
        stipend: 18000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Adobe",
        position: "Graphic Designer Intern",
        location: "Pune, India",
        stipend: 21000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Intel",
        position: "Research Intern",
        location: "Noida, India",
        stipend: 26000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "IBM",
        position: "AI Research Intern",
        location: "Ahmedabad, India",
        stipend: 27000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Oracle",
        position: "Database Administrator Intern",
        location: "Jaipur, India",
        stipend: 23000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Salesforce",
        position: "Cloud Engineer Intern",
        location: "Surat, India",
        stipend: 25000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "SAP",
        position: "ERP Consultant Intern",
        location: "Lucknow, India",
        stipend: 24000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Uber",
        position: "Operations Intern",
        location: "Patna, India",
        stipend: 20000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "PayPal",
        position: "Finance Intern",
        location: "Bhopal, India",
        stipend: 22000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Twitter",
        position: "Communications Intern",
        location: "Gandhinagar, India",
        stipend: 19000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Snapchat",
        position: "Product Management Intern",
        location: "Raipur, India",
        stipend: 23000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Spotify",
        position: "Music Curator Intern",
        location: "Ranchi, India",
        stipend: 20000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Airbnb",
        position: "Community Support Intern",
        location: "Bhubaneswar, India",
        stipend: 21000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "LinkedIn",
        position: "Recruitment Intern",
        location: "Amritsar, India",
        stipend: 24000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Uber",
        position: "Business Development Intern",
        location: "Nagpur, India",
        stipend: 22000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Netflix",
        position: "Social Media Intern",
        location: "Vijayawada, India",
        stipend: 20000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Adobe",
        position: "Front-End Developer Intern",
        location: "Mysore, India",
        stipend: 23000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Apple",
        position: "Software Testing Intern",
        location: "Coimbatore, India",
        stipend: 25000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Tesla",
        position: "Renewable Energy Intern",
        location: "Kochi, India",
        stipend: 26000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Intel",
        position: "Embedded Systems Intern",
        location: "Thiruvananthapuram, India",
        stipend: 28000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "IBM",
        position: "Cybersecurity Intern",
        location: "Guwahati, India",
        stipend: 24000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Oracle",
        position: "Network Engineer Intern",
        location: "Visakhapatnam, India",
        stipend: 23000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "SAP",
        position: "Business Analyst Intern",
        location: "Madurai, India",
        stipend: 22000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "PayPal",
        position: "Customer Service Intern",
        location: "Agra, India",
        stipend: 21000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Twitter",
        position: "Content Strategist Intern",
        location: "Varanasi, India",
        stipend: 19000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Snapchat",
        position: "Creative Intern",
        location: "Aurangabad, India",
        stipend: 20000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Spotify",
        position: "Event Planning Intern",
        location: "Solapur, India",
        stipend: 22000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Airbnb",
        position: "Hospitality Management Intern",
        location: "Srinagar, India",
        stipend: 24000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "LinkedIn",
        position: "Learning & Development Intern",
        location: "Rajkot, India",
        stipend: 23000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Google",
        position: "SEO Intern",
        location: "Udaipur, India",
        stipend: 21000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Microsoft",
        position: "Cloud Computing Intern",
        location: "Tiruchirappalli, India",
        stipend: 25000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Amazon",
        position: "Supply Chain Intern",
        location: "Jodhpur, India",
        stipend: 26000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Facebook",
        position: "Social Impact Intern",
        location: "Puducherry, India",
        stipend: 24000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Apple",
        position: "AR/VR Development Intern",
        location: "Jabalpur, India",
        stipend: 28000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Tesla",
        position: "Automotive Engineering Intern",
        location: "Gwalior, India",
        stipend: 30000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Netflix",
        position: "Film Production Intern",
        location: "Vellore, India",
        stipend: 22000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Adobe",
        position: "Content Marketing Intern",
        location: "Tirupati, India",
        stipend: 21000,
        duration: 2,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "Intel",
        position: "DevOps Intern",
        location: "Dhanbad, India",
        stipend: 25000,
        duration: 1,
        starting_date: new Date(),
        is_immediate: true
      },
      {
        company_name: "IBM",
        position: "Blockchain Intern",
        location: "Patiala, India",
        stipend: 24000,
        duration: 3,
        starting_date: new Date(),
        is_immediate: true
      }
    ]
  })

  console.log("Internships data inserted successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const newsArticles = {
  "new-pain-relief-medication": {
    title: "ZimPharm Launches New Pain Relief Medication",
    date: "May 15, 2023",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1460&q=80",
    content: `
      <p>ZimPharm is proud to announce the launch of our latest product, a groundbreaking pain relief medication designed to provide fast and effective relief for chronic pain sufferers. This new formulation represents a significant advancement in our ongoing commitment to improving the quality of life for patients across Zimbabwe and beyond.</p>
      
      <h2>Key Features of the New Medication</h2>
      <ul>
        <li>Rapid onset of action, providing relief within 15-30 minutes</li>
        <li>Long-lasting effect, up to 12 hours of pain relief</li>
        <li>Minimal side effects compared to traditional pain medications</li>
        <li>Available in both tablet and liquid forms for patient convenience</li>
      </ul>
      
      <p>Dr. Tendai Moyo, Head of Research and Development at ZimPharm, stated, "This new pain relief medication is the result of years of dedicated research and clinical trials. We're confident that it will make a significant difference in the lives of those suffering from chronic pain conditions."</p>
      
      <p>The medication has been approved by the Medicines Control Authority of Zimbabwe (MCAZ) and will be available in pharmacies nationwide starting next month. ZimPharm is also in discussions with health authorities in neighboring countries to make the medication available across the region.</p>
      
      <h2>Patient-Centric Approach</h2>
      <p>As part of our commitment to patient care, ZimPharm will be launching an educational campaign to ensure that patients and healthcare providers are well-informed about the proper use and benefits of this new medication. We will also be setting up a dedicated helpline to address any questions or concerns from patients and healthcare professionals.</p>
      
      <p>This launch marks another milestone in ZimPharm's mission to provide high-quality, affordable pharmaceutical products that improve the health and well-being of people in Zimbabwe and beyond. We remain committed to innovation and excellence in all aspects of our operations.</p>
    `,
  },
  "expansion-of-research-facilities": {
    title: "Expansion of Research Facilities",
    date: "April 2, 2023",
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `
      <p>ZimPharm is excited to announce a significant expansion of our research facilities, marking a new chapter in our commitment to pharmaceutical innovation and excellence. This expansion involves a substantial investment in state-of-the-art equipment and infrastructure, aimed at boosting our research and development capabilities.</p>
      
      <h2>Key Aspects of the Expansion</h2>
      <ul>
        <li>Addition of 5,000 square meters of laboratory space</li>
        <li>Installation of advanced analytical and testing equipment</li>
        <li>Creation of a dedicated biotechnology research wing</li>
        <li>Establishment of a pilot production facility for small-scale trials</li>
      </ul>
      
      <p>Mr. Chipo Mutasa, CEO of ZimPharm, commented on the expansion: "This investment in our research facilities is a testament to our long-term commitment to driving pharmaceutical innovation in Zimbabwe. It will enable us to accelerate our drug discovery and development processes, ultimately bringing new and improved medications to market faster."</p>
      
      <h2>Focus Areas for Research</h2>
      <p>The expanded facilities will allow ZimPharm to intensify its research efforts in several key areas:</p>
      <ul>
        <li>Development of novel treatments for prevalent diseases in Africa</li>
        <li>Improvement of existing formulations for enhanced efficacy and reduced side effects</li>
        <li>Exploration of natural compounds from indigenous plants for potential pharmaceutical applications</li>
        <li>Advanced drug delivery systems for improved patient compliance and outcomes</li>
      </ul>
      
      <h2>Collaboration and Knowledge Sharing</h2>
      <p>As part of this expansion, ZimPharm will also be strengthening its collaborations with local universities and research institutions. We will be introducing a visiting scientist program and expanding our internship opportunities for young researchers and students in the pharmaceutical sciences.</p>
      
      <p>Dr. Rumbidzai Kamba, Director of Research at ZimPharm, added, "This expansion not only enhances our research capabilities but also positions ZimPharm as a center of excellence in pharmaceutical research in Africa. We're excited about the potential breakthroughs that will emerge from these new facilities."</p>
      
      <p>The expansion project is expected to be completed within the next 18 months, with some new facilities becoming operational in phases starting from the end of this year. This investment reaffirms ZimPharm's position as a leader in the African pharmaceutical industry and our dedication to improving healthcare outcomes through innovation and quality.</p>
    `,
  },
  "partnership-with-local-universities": {
    title: "Partnership with Local Universities",
    date: "March 10, 2023",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    content: `
      <p>ZimPharm is proud to announce a groundbreaking partnership with leading universities in Zimbabwe, aimed at supporting pharmaceutical research and education. This initiative represents a significant step forward in our commitment to fostering innovation and developing local talent in the pharmaceutical industry.</p>
      
      <h2>Key Aspects of the Partnership</h2>
      <ul>
        <li>Collaborative research projects between ZimPharm and university departments</li>
        <li>Establishment of a ZimPharm Scholarship Program for promising pharmacy students</li>
        <li>Creation of internship and mentorship programs for undergraduate and postgraduate students</li>
        <li>Joint seminars and workshops to bridge the gap between academia and industry</li>
      </ul>
      
      <p>Dr. Farai Moyo, Director of Academic Partnerships at ZimPharm, expressed enthusiasm about the initiative: "This partnership is a win-win for both ZimPharm and our partner universities. It allows us to tap into the fresh perspectives and innovative ideas of academia while providing students with real-world industry experience and exposure."</p>
      
      <h2>Participating Universities</h2>
      <p>The initial phase of this partnership includes collaborations with:</p>
      <ul>
        <li>University of Zimbabwe</li>
        <li>Midlands State University</li>
        <li>National University of Science and Technology</li>
      </ul>
      <p>We are in discussions to expand this partnership to include more institutions in the coming years.</p>
      
      <h2>Research Focus Areas</h2>
      <p>The collaborative research projects will focus on several key areas:</p>
      <ul>
        <li>Development of new drug delivery systems</li>
        <li>Pharmacogenomics and personalized medicine</li>
        <li>Utilization of artificial intelligence in drug discovery</li>
        <li>Improvement of manufacturing processes for enhanced efficiency and sustainability</li>
      </ul>
      
      <h2>Supporting Future Pharmacists</h2>
      <p>The ZimPharm Scholarship Program will provide financial support to outstanding pharmacy students, covering tuition fees and providing a stipend for living expenses. Additionally, these scholars will have guaranteed internship positions at ZimPharm during their studies and preferential consideration for employment upon graduation.</p>
      
      <p>Professor Tatenda Nhamo, Dean of the School of Pharmacy at the University of Zimbabwe, commented: "This partnership with ZimPharm opens up exciting opportunities for our students and faculty. It will significantly enhance the practical aspects of our pharmacy education and contribute to cutting-edge research in pharmaceutical sciences."</p>
      
      <h2>Looking to the Future</h2>
      <p>This partnership is part of ZimPharm's long-term strategy to strengthen the pharmaceutical industry in Zimbabwe and contribute to the development of world-class healthcare solutions. By investing in education and research, we are not only securing our own future talent pipeline but also contributing to the overall advancement of pharmaceutical science in our country.</p>
      
      <p>We look forward to the innovative ideas and breakthrough discoveries that will emerge from this collaboration, further cementing ZimPharm's position as a leader in pharmaceutical research and development in Africa.</p>
    `,
  },
}

export default function NewsArticle() {
  const { slug } = useParams()
  const article = newsArticles[slug as keyof typeof newsArticles]

  const headerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const content = contentRef.current

    gsap.from(header, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    })

    gsap.from(content, {
      scrollTrigger: {
        trigger: content,
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
    })
  }, [])

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div ref={headerRef} className="mb-12">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/news">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Link>
        </Button>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#312783] sm:text-5xl">{article.title}</h1>
        <p className="text-lg text-gray-600">{article.date}</p>
      </div>

      <div className="mb-8">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={1200}
          height={600}
          className="rounded-lg object-cover"
        />
      </div>

      <div ref={contentRef} className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  )
}

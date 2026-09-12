export const personalInfo = {
  name: 'Selvakrishnan Rajendran',
  firstName: 'Selva',
  lastName: 'krishnan',
  title: 'Senior Data Engineer',
  tagline: 'I engineer the systems that make data work.',
  about: `I'm a Data Engineer passionate about designing and building scalable data solutions that transform raw, complex data into reliable and meaningful information. I enjoy working with data pipelines, databases, cloud technologies, and modern data engineering tools to solve real-world problems. I'm constantly learning and exploring new technologies to build efficient, scalable, and high-quality data systems.`,
  location: 'Chennai, India',
  email: 'selvakrish2949@gmail.com',
  github: 'https://github.com/selvakrishnan',
  linkedin: 'https://www.linkedin.com/in/selvakrishnanrajendran/',
  resumeUrl: '/selvakrishnanportfolio/resume.pdf',
};

export const skills = {
  'Cloud & Data Platforms': [
    'Google BigQuery',
    'Google Cloud Storage',
    'Google Dataflow',
    'Google Data Fusion',
    'Google Dataproc',
    'Google Cloud Functions',
    'Cloud Composer',
    'Cloud Workflows',
    'Pub/Sub',
    'Google Cloud SQL',
    'Cloud KMS',
    'Secret Manager',
  ],
  'Data Engineering': [
    'Apache Airflow',
    'Apache Beam',
    'Apache Spark',
    'PySpark',
    'Scala Spark',
    'Apache Hudi',
    'Apache Hive',
    'ETL Pipelines',
    'CDAP Directives',
  ],
  'Languages & Databases': [
    'Python',
    'Scala',
    'SQL',
    'Oracle SQL',
    'PostgreSQL',
    'GitHub',
  ],
};

export const certifications = [
  'Google Cloud Associate Cloud Engineer',
  'Google Cloud Professional Data Engineer',
  'Astronomer for Apache Airflow Fundamentals',
];

export const experience = [
  {
    id: 'walmart',
    role: 'Data Engineer III',
    company: 'Walmart Global Tech India',
    industry: 'Retail',
    location: 'Chennai, India',
    duration: 'Oct 2024 – Present',
    current: true,
    highlights: [
      'Led the migration of ETL workflows from Automic to Apache Airflow, improving scalability, observability, and reducing manual job failures.',
      'Designed and implemented DAGs in Airflow to automate complex data pipelines and ensure end-to-end data reliability.',
      'Developed and optimized ETL pipelines to identify and process blocking customer records, improving data quality and enabling timely business actions.',
      'Migrated Hive tables to Apache Hudi to support upserts, deletes, and incremental processing. Built Spark-based ingestion jobs and improved query performance for downstream analytics.',
    ],
    tech: ['Apache Airflow', 'Apache Hudi', 'PySpark', 'Hive', 'Spark'],
  },
  {
    id: 'deloitte',
    role: 'Consultant — Data Engineer',
    company: 'Deloitte',
    industry: 'Banking & Retail',
    location: 'Chennai, India',
    duration: 'Oct 2022 – Oct 2024',
    current: false,
    highlights: [
      'Migrated entire business-critical data pipelines from on-premises Oracle, MySQL, and MSSQL databases to Google BigQuery.',
      'Architected dataflow pipelines for 58 distinct source files with rigorous data quality checks.',
      'Developed reusable ETL Framework using Dataflow & Apache Beam handling 70M–100M records daily from GCS to BigQuery.',
      'Designed near-real-time pipeline to update retail transaction data from IoT sensors using Pub/Sub and Dataflow.',
      'Created triggering mechanisms for frontend UI in BigQuery via REST API, Cloud Functions, and UDFs.',
    ],
    tech: ['Google BigQuery', 'Google Dataflow', 'Apache Beam', 'Cloud Functions', 'Pub/Sub', 'Python'],
  },
  {
    id: 'tcs',
    role: 'Systems Engineer — Data Engineer',
    company: 'Tata Consultancy Services',
    industry: 'Telecommunications',
    location: 'Chennai, India',
    duration: 'Sep 2020 – Oct 2022',
    current: false,
    highlights: [
      'Fine-tuned and managed 150+ ETL pipelines on Google Cloud using Cloud Data Fusion, processing 50TB of raw data.',
      'Managed a 5-member cross-functional team coordinating with six senior business partners for production releases.',
      'Optimized Dataproc Spark cluster performance, achieving a 24% increase in pipeline efficiency and 30 hours saved per week.',
      'Developed Wrangler directives (Recipes) for data cleansing and transformations.',
    ],
    tech: ['Google Data Fusion', 'Dataproc', 'PySpark', 'Cloud Data Fusion', 'CDAP Directives'],
  },
];

export const projects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'My personal portfolio website built with React, TypeScript and Three.js. A cinematic, immersive experience featuring scroll-driven 3D animations, GSAP transitions, and Lenis smooth scrolling.',
    tech: ['React', 'TypeScript', 'Three.js', 'GSAP', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/selvakrishnan/selvakrishnanportfolio',
    live: 'https://selvakrishnan.github.io/selvakrishnanportfolio',
    featured: true,
  },
];

export const education = {
  degree: 'B.Tech Information Technology',
  institution: 'Bannari Amman Institute of Technology',
  location: 'Sathyamangalam, Erode',
  duration: 'Aug 2016 – May 2020',
  cgpa: '7.29',
  coursework: ['Data Science & Analytics', 'Cloud Computing', 'Data Structure & Algorithms'],
};

export interface MilestoneHub {
  id: string;
  name: string;
  codename: string;
  year: number;
  location: string;
  country: string;
  distance: string; // Replaces the astronomical distance with progression/growth markers
  brief: string;
  story: string;
  historyDetails: string[];
  teams: string[];
  stats: {
    label: string;
    value: string;
  }[];
  coordinates: {
    lat: number;
    lng: number;
  };
  color: string; // hex or color names
  glowColor: string; // for custom shadow coloring
  planetClass: string;
  sizeMultiplier: number; // visual scale multiplier
  emoji: string; // visual icon replacement representing the site
  imageUrl: string;
  achievements: { title: string; description: string }[];
  tourGuide: {
    headline: string;
    badgeAccess: string;
    visitorTips: string;
  };
}

export const AMAZON_HUBS: MilestoneHub[] = [
  {
    id: "seattle_garage",
    name: "The Bellevue Garage",
    codename: "Cadabra",
    year: 1994,
    location: "Bellevue, Washington",
    country: "USA",
    distance: "0.1 LY",
    brief: "The cosmic origin of Amazon. Jeff Bezos starts an online bookstore out of a standard suburban residential garage.",
    story: "In July 1994, Jeff Bezos incorporated a company named Cadabra, which was quickly renamed to Amazon.com. Working out of his garage in Bellevue, Washington, Bezos, his wife MacKenzie Tuttle, and programmer Shel Kaphan began coding the software that would index millions of books. Built on the core principle of frugality, their first workstations were made of cheap exterior doors salvaged from Home Depot — a tradition of frugal innovation that persists across Amazon to this day.",
    historyDetails: [
      "Founded initially under the mystical name 'Cadabra' before being rebranded to Amazon, named after the world's most voluminous river to signal massive scale.",
      "The first customer order was purchased in April 1995: a science textbook titled 'Fluid Concepts and Creative Analogies' by Douglas Hofstadter.",
      "Frugality was the driving force. Desks were constructed from $15 wooden doors, creating the legendary 'Door Desk' trophy representing innovation on a budget."
    ],
    teams: [
      "Jeff Bezos (Founder & Architect)",
      "MacKenzie Tuttle (First Employee & Accountant)",
      "Shel Kaphan (First Developer & VP of R&D)"
    ],
    stats: [
      { label: "Original Capital", value: "$10,000" },
      { label: "First Book Sold", value: "Douglas Hofstadter" },
      { label: "Staff Count", value: "3 Pioneers" },
      { label: "Building Size", value: "400 sq. ft." }
    ],
    coordinates: { lat: 47.6101, lng: -122.2015 },
    color: "#F59E0B", // Amber
    glowColor: "rgba(245, 158, 11, 0.6)",
    planetClass: "mercury",
    sizeMultiplier: 0.7,
    emoji: "🚗",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
    achievements: [
      { title: "The $10K Origin", description: "Configured the initial database, indexing structures, and shopping cart servers using only $10,000 in personal capital." },
      { title: "First Landmark Order", description: "Shipped 'Fluid Concepts and Creative Analogies' in April 1995, triggering the global transition to digital retail." },
      { title: "The Door Desk Legacy", description: "Hand-built workstations from cheap hardware-store doors, starting a legendary corporate symbol of frugality and inventiveness." }
    ],
    tourGuide: {
      headline: "The Cradle of Frugality",
      badgeAccess: "Public Exterior Sightseeing / Historical Site",
      visitorTips: "Take a quiet, respectful drive through the Bellevue residential district to view the external garage door where Amazon's e-commerce revolution was coded into existence."
    }
  },
  {
    id: "pacmed_tower",
    name: "PacMed SODO Tower",
    codename: "The Everything Store",
    year: 1999,
    location: "SODO District, Seattle",
    country: "USA",
    distance: "0.5 LY",
    brief: "The iconic Art Deco skyscraper representing Amazon's transition from bookstore to the global 'Everything Store'.",
    story: "As Amazon went public and grew exponentially, it needed a unified corporate headquarters. In 1999, Amazon leased the historic Pacific Medical Center (PacMed) tower. Perched high on Beacon Hill overlooking Interstate 5 and the SODO industrial district, this Art Deco monument housed the early pioneers who designed Amazon's first recommendation algorithms, expanded into music, video, and consumer electronics, and pioneered the concept of self-organizing 'Two-Pizza Teams'.",
    historyDetails: [
      "The iconic building was originally built as a Marine Hospital in 1932 to serve war veterans, standing as a historical Seattle landmark.",
      "In this building, Amazon evolved its infrastructure to transition from a pure book seller to 'The Everything Store'.",
      "This is where the famous '2-Pizza Team' organizational model was devised by Jeff Bezos: no meeting group should be too large to be fed by two large pizzas."
    ],
    teams: [
      "Recommendation Systems R&D",
      "Customer Support Leadership",
      "Early Marketplace Engineering"
    ],
    stats: [
      { label: "Employee Capacity", value: "1,200" },
      { label: "Year Leased", value: "1999" },
      { label: "Key Launch", value: "Electronics & Toys" },
      { label: "Floor Count", value: "16 Stories" }
    ],
    coordinates: { lat: 47.5912, lng: -122.3175 },
    color: "#E25F45", // Burnt Orange
    glowColor: "rgba(226, 95, 69, 0.6)",
    planetClass: "venus",
    sizeMultiplier: 0.85,
    emoji: "🏰",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    achievements: [
      { title: "Decoupled Monoliths", description: "Pioneered the architecture of decomposing Amazon's massive monolithic codebases into standalone, decoupled microservice APIs." },
      { title: "Two-Pizza Agile Teams", description: "Created the legendary management rule that teams must remain small enough to be fed by two large pizzas, unlocking rapid innovation." },
      { title: "E-Commerce Diversification", description: "Successfully expanded inventory catalog from pure books into electronics, toys, CDs, and third-party merchant marketplace items." }
    ],
    tourGuide: {
      headline: "The Art Deco Landmark",
      badgeAccess: "Historical Landmark Office / Public Access Lobby",
      visitorTips: "Perched majestically on Beacon Hill, Seattle. Visit the public-accessible lobby museum showcasing historic Marine Hospital photography and early Amazon corporate archives."
    }
  },
  {
    id: "slu_campus",
    name: "South Lake Union Campus",
    codename: "Fiona Era",
    year: 2010,
    location: "South Lake Union, Seattle",
    country: "USA",
    distance: "1.0 LY",
    brief: "The massive consolidation. Amazon integrates into Seattle's urban grid, revitalizing a historic industrial area.",
    story: "Instead of choosing an isolated suburban tech campus, Amazon made the deliberate decision to stay in urban Seattle. In 2010, the company began moving into a brand-new multi-building campus in South Lake Union. Named after initial internal code words like 'Fiona' (the project that birthed the Kindle), this massive urban campus allowed Amazonians to live, work, and collaborate directly inside the city, triggering an unprecedented era of product launches and the meteoric rise of AWS.",
    historyDetails: [
      "The decision to choose an urban campus over a secluded suburban fortress is credited with sparking Seattle's tech-hub renaissance.",
      "Buildings were named after significant company milestones, such as 'Fiona' (Kindle Project), 'Rufus' (the office dog), and 'Wainwright' (first customer).",
      "This era saw the explosive growth of Amazon Web Services (AWS) from a small internal utility to a global cloud computing empire."
    ],
    teams: [
      "Amazon Web Services (AWS)",
      "Kindle Hardware Engineering",
      "Amazon Prime Operations"
    ],
    stats: [
      { label: "Campus Buildings", value: "11 unique blocks" },
      { label: "Local Employees", value: "25,000+" },
      { label: "Key Launch", value: "Kindle Keyboard" },
      { label: "Green Certs", value: "LEED Gold" }
    ],
    coordinates: { lat: 47.6225, lng: -122.3382 },
    color: "#10B981", // Emerald
    glowColor: "rgba(16, 185, 129, 0.6)",
    planetClass: "earth",
    sizeMultiplier: 1.0,
    emoji: "🏢",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    achievements: [
      { title: "The Birth of AWS Cloud", description: "Engineered and scaled the early cloud architecture of EC2 and S3, completely transforming how global websites and APIs operate." },
      { title: "Kindle Hardware Revolution", description: "Brought electronic ink screen books (Fiona Kindle project) to mainstream consumer adoption, digitizing global literature." },
      { title: "Urban Neighborhood Revitalization", description: "Successfully consolidated dozens of independent Seattle offices into an open, community-integrated downtown business neighborhood." }
    ],
    tourGuide: {
      headline: "The Urban Grid Pioneer",
      badgeAccess: "Full Employee Blue Badge Access",
      visitorTips: "Stroll between the block buildings, grab lunch at the local street food trucks, and visit the Wainwright or Fiona building lobbies to explore Kindle's historical timeline."
    }
  },
  {
    id: "day1_spheres",
    name: "Day 1 & The Spheres",
    codename: "Biophilic Nest",
    year: 2018,
    location: "Downtown Seattle, Washington",
    country: "USA",
    distance: "1.5 LY",
    brief: "A architectural masterpiece. Three colossal glass biomes containing 40,000+ exotic plants, fostering innovative ideas.",
    story: "Designed to help employees think creatively and escape the typical sterile corporate cubicle, The Spheres opened in January 2018. Nestled directly beneath the towering 'Day 1' skyscraper, these three overlapping glass domes are home to more than 40,000 plants representing over 50 countries, including a giant 55-foot Living Wall. It stands as a physical manifestation of Amazon's philosophy: that work is an organic, evolving journey where nature and deep focus intersect.",
    historyDetails: [
      "Constructed from 2,643 panes of high-performance glass and structured with steel geometric pentagonal hexecontahedron patterns.",
      "Maintains a high-humidity environment: daytime temp is 72°F at 60% humidity, reflecting tropical cloud forest conditions.",
      "The flagship Day 1 building towers above, housing executive teams and representing Amazon's core principle: 'It is always Day 1'."
    ],
    teams: [
      "Executive Leadership (S-Team)",
      "Alexa & Echo Hardware R&D",
      "Sustainable Architecture Group"
    ],
    stats: [
      { label: "Plant Species", value: "400+ varieties" },
      { label: "Structural Steel", value: "620 tons" },
      { label: "Tallest Plant", value: "55ft Ficus Tree" },
      { label: "Opened Year", value: "2018" }
    ],
    coordinates: { lat: 47.6156, lng: -122.3396 },
    color: "#06B6D4", // Cyan
    glowColor: "rgba(6, 182, 212, 0.6)",
    planetClass: "mars",
    sizeMultiplier: 1.15,
    emoji: "🔮",
    imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80",
    achievements: [
      { title: "World-Class Biophilic Domes", description: "Built three massive glass geodesic spheres that houses 40,000 plants from 50 nations, creating a highly oxygenated creative think tank." },
      { title: "Alexa & Echo Hardware R&D", description: "Designed the far-field voice recognition microphone arrays and localized smart-speaker processors powering millions of homes." },
      { title: "The 'Day 1' Executive Tower", description: "Erected the iconic headquarters tower housing the CEO and S-Team, standardizing the absolute principle: 'It is always Day 1'." }
    ],
    tourGuide: {
      headline: "The Emerald Biophilic Nest",
      badgeAccess: "Free Blue Badge Walk-in / Public Weekend Booking",
      visitorTips: "Amazonians can badge in with up to 3 guests any time. Hike the elevated boardwalk, sit in the spherical hanging meeting nests, and view the massive 55-foot organic vertical garden."
    }
  },
  {
    id: "hq2_helix",
    name: "Arlington HQ2 & The Helix",
    codename: "Metropolitan Park",
    year: 2023,
    location: "Arlington, Virginia",
    country: "USA",
    distance: "2.3 LY",
    brief: "The spectacular East Coast expansion, showcasing a towering outdoor spiraling forest trail called The Helix.",
    story: "Amazon established its official second headquarters (HQ2) in National Landing, Arlington, Virginia, launching the breathtaking Metropolitan Park campus in 2023. The crown jewel of the next phase is 'The Helix'—a 350-foot glass spiral building. The Helix features two spiraling outdoor walkways containing native plants, water streams, and pine trees, allowing employees to hike to the peak of the tower, reflecting a symbiotic relationship between technology and natural ecology.",
    historyDetails: [
      "The Helix design mimics a double-helix DNA structure, symbolizing the fundamental building blocks of human life and natural creation.",
      "Features entirely carbon-neutral operations, with energy sourced from 100% renewable local solar farms.",
      "HQ2 expands Amazon's cloud engineering and federal technology capacity given its proximity to Washington D.C."
    ],
    teams: [
      "AWS Public Sector Cloud",
      "Amazon Project Kuiper (Satellite)",
      "East Coast Corporate HR"
    ],
    stats: [
      { label: "Projected Staff", value: "25,000 Specialists" },
      { label: "Total Square Feet", value: "2.1 Million" },
      { label: "Helix Height", value: "350 feet" },
      { label: "Renewable Power", value: "100% Solar" }
    ],
    coordinates: { lat: 38.8624, lng: -77.0512 },
    color: "#3B82F6", // Blue
    glowColor: "rgba(59, 130, 246, 0.6)",
    planetClass: "jupiter",
    sizeMultiplier: 1.3,
    emoji: "🧬",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    achievements: [
      { title: "Double-Helix Masterpiece", description: "Architected a spectacular 350-foot spiraling glass tower simulating the DNA molecule, incorporating a continuous outdoor hiking path." },
      { title: "Net-Zero Operational Model", description: "Operates 100% carbon-neutral offices powered directly by dedicated regional solar farms and geothermal heating arrays." },
      { title: "Satellite Ground Ops", description: "Houses the primary control and orbital coordinate routing engineers behind Project Kuiper, Amazon's satellite internet initiative." }
    ],
    tourGuide: {
      headline: "The Double-Helix Spiral Path",
      badgeAccess: "Free Campus Access / Advanced Helix Ticket Required",
      visitorTips: "Reserve a spot on the Helix Forest Walkway. Enjoy a standard badge hike climbing up the outside of the building through natural Virginia mountain trees to the sky overlook."
    }
  },
  {
    id: "london_principal",
    name: "London Principal Place",
    codename: "Prime Europe Hub",
    year: 2017,
    location: "Shoreditch, London",
    country: "UK",
    distance: "3.2 LY",
    brief: "The cultural and cinematic heart of Amazon Europe, powering Prime Video's global entertainment expansion.",
    story: "Located in the artistic and tech-heavy neighborhood of Shoreditch, Principal Place is a stunning 15-story architectural landmark. Standing as Amazon's UK headquarters since 2017, this office features high-tech design centers, state-of-the-art editing bays, and a sprawling half-acre rooftop terrace. The building houses the creative directors and developers behind Amazon Prime Video, orchestrating European media production and AWS global database development.",
    historyDetails: [
      "Designed by world-renowned Foster + Partners, emphasizing heavy raw metals, expansive high glass, and industrial aesthetics.",
      "The building sits on the border of Shoreditch (art/startups) and the City of London (finance), merging creative culture with business scale.",
      "Hosts world-class recording and video editing studios for localized European television and sporting events."
    ],
    teams: [
      "Amazon Prime Video Creative Team",
      "Global Database & Analytics Dev",
      "Amazon Fashion (Europe)"
    ],
    stats: [
      { label: "UK Headquarters", value: "Opened 2017" },
      { label: "Employee Capacity", value: "5,000+" },
      { label: "Rooftop Terrace", value: "0.5 Acres" },
      { label: "Design Architects", value: "Foster + Partners" }
    ],
    coordinates: { lat: 51.5218, lng: -0.0792 },
    color: "#8B5CF6", // Purple
    glowColor: "rgba(139, 92, 246, 0.6)",
    planetClass: "saturn",
    sizeMultiplier: 1.1,
    emoji: "🎡",
    imageUrl: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=800&q=80",
    achievements: [
      { title: "Prime Video European Hub", description: "Anchors the award-winning cinematic and series production division, driving massive localized European streaming expansion." },
      { title: "Foster + Partners Architecture", description: "Engineered a stunning 15-story architectural statement with heavy exposed industrial steel, glass, and rich brick work." },
      { title: "AWS Core Database R&D", description: "Hosts the global database engineers building high-efficiency cloud data structures used in transactional processing." }
    ],
    tourGuide: {
      headline: "The Shoreditch Sky-Terrace",
      badgeAccess: "Free Employee Blue Badge Access",
      visitorTips: "Head up to the massive half-acre rooftop terrace at twilight. Look out onto historic Shoreditch and enjoy the custom cinematic screening lounges on the middle floors."
    }
  },
  {
    id: "tokyo_meguro",
    name: "Tokyo Meguro Hub",
    codename: "Arco Tower",
    year: 2018,
    location: "Meguro, Tokyo",
    country: "Japan",
    distance: "4.1 LY",
    brief: "A masterclass in global localization. Merges Japan's hyper-efficient urban infrastructure with zen collaboration spaces.",
    story: "Amazon Japan established its magnificent headquarters at the Arco Tower in Meguro, Tokyo, in 2018. Designed with structural motifs honoring classic Japanese materials like shoji screens, tatami patterns, and rock gardens, the building offers high-tech workspace for thousands of engineers. Tokyo Meguro represents Amazon's extreme dedication to localized customer experience, ensuring lightning-fast logistics and localized content for one of the densest markets on Earth.",
    historyDetails: [
      "Features traditional zen-gardens, stone-paved corridors, and natural wooden collaboration zones inside a high-tech corporate shell.",
      "Home to the Japan logistics brain center, which coordinates same-day delivery across Japan's intricate bullet train and urban shipping grids.",
      "Developed custom voice models and local language comprehension nodes for Alexa Japan and Prime Video localized anime licensing."
    ],
    teams: [
      "Amazon Japan Retail Operations",
      "Alexa Speech & Language Science",
      "APAC Logistics Engineering"
    ],
    stats: [
      { label: "Local Engineers", value: "3,500+" },
      { label: "Key Milestone", value: "Same-Day Prime" },
      { label: "Design Theme", value: "Traditional Japanese Zen" },
      { label: "Local Launch", value: "Japan Kindle Store" }
    ],
    coordinates: { lat: 35.6339, lng: 139.7158 },
    color: "#EC4899", // Pink/Magenta
    glowColor: "rgba(236, 72, 153, 0.6)",
    planetClass: "uranus",
    sizeMultiplier: 1.05,
    emoji: "🗼",
    imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    achievements: [
      { title: "Traditional Zen Spaces", description: "Harmoniously integrated paper shoji partitions, authentic tatami floor seating, and moss gardens inside a corporate tech skyscraper." },
      { title: "Lightning APAC Delivery", description: "Engineered high-frequency routing logistics integrating with Tokyo's hyper-efficient subways and bullet-train shipping networks." },
      { title: "Alexa Japan Voice Science", description: "Trained advanced natural language processing models to grasp highly context-dependent Japanese honorifics and speech manners." }
    ],
    tourGuide: {
      headline: "The Zen Arco Sanctuary",
      badgeAccess: "Free Employee Blue Badge Access",
      visitorTips: "Grab an authentic Japanese Matcha latte from the employee café, book a brainstorm in the Tatami Room, and meditate along the rock garden paths."
    }
  },
  {
    id: "hyderabad_campus",
    name: "Hyderabad Campus",
    codename: "Gachibowli Owned",
    year: 2019,
    location: "Hyderabad, Telangana",
    country: "India",
    distance: "5.0 LY",
    brief: "Amazon's first self-owned campus outside the US. A massive 9.5-acre architectural campus built for peak operational engineering.",
    story: "In August 2019, Amazon inaugurated its largest corporate building worldwide in Gachibowli, Hyderabad. Covering 1.8 million square feet and spanning a beautiful 9.5-acre campus, it is the first fully self-owned office campus outside of North America. Built with massive sustainability standards—including automated rainwater harvesting, waste treatment, and high-efficiency double-glass walls—the Hyderabad campus serves as a foundation for global technology support, operations, and AI seller verification.",
    historyDetails: [
      "Completed in just 39 months, using 2.5 times more steel than the Eiffel Tower to support its massive high-density configuration.",
      "Incorporates a stellar carbon footprint footprint: 49 elevator banks moving 15,000 employees smoothly with intelligent scheduling.",
      "Houses the absolute core support system for Amazon's millions of international third-party merchants."
    ],
    teams: [
      "Global Merchant Services",
      "AWS Enterprise Technical Support",
      "Machine Learning Seller Risk Group"
    ],
    stats: [
      { label: "Campus Area", value: "9.5 Acres" },
      { label: "Total Capacity", value: "15,000 employees" },
      { label: "Steel Utilized", value: "18,000 Metric Tons" },
      { label: "Sustainability", value: "Water Neutral" }
    ],
    coordinates: { lat: 17.4194, lng: 78.3489 },
    color: "#6366F1", // Indigo
    glowColor: "rgba(99, 102, 241, 0.6)",
    planetClass: "neptune",
    sizeMultiplier: 1.25,
    emoji: "🕌",
    imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
    achievements: [
      { title: "Largest Worldwide HQ Site", description: "Built Amazon's single largest corporate building on a custom 9.5-acre plot, complete with automated modern facilities for 15,000 experts." },
      { title: "Steel Engineering Monument", description: "Employed 18,000 tons of structural steel—nearly triple the amount of the Eiffel Tower—engineered to resist seismic shifts." },
      { title: "Seller Verification Engines", description: "Houses the machine learning core teams that verify and onboard millions of international third-party merchants daily." }
    ],
    tourGuide: {
      headline: "The Global Gachibowli Monolith",
      badgeAccess: "Free Employee Blue Badge Access",
      visitorTips: "Walk the sprawling manicured campus lawns. Witness the massive central rain-harvesting channels and enjoy regional culinary delicacies in the high-capacity dining areas."
    }
  },
  {
    id: "blr37_bengaluru",
    name: "The Skyscraper: BLR37",
    codename: "The Sky Peak",
    year: 2025,
    location: "Bengaluru, Karnataka",
    country: "India",
    distance: "6.2 LY",
    brief: "The newest, futuristic crown jewel. A soaring skyscraper in India's tech capital driving AWS Deep Learning and global Robotics.",
    story: "Representing the pinnacle of modern skyscraper design, the brand-new BLR37 building in Bengaluru is Amazon's newest global tech peak. Rising prominently into the Bengaluru skyline, this state-of-the-art skyscraper is engineered as a zero-emission facility. Equipped with interactive generative-AI collaboration tables, high-performance computing pods, and a physical AWS DeepRacer testing course, it houses the core researchers shaping the future of global logistics and cloud intelligence.",
    historyDetails: [
      "Engineered as a futuristic 'smart-building' that dynamically adjusts lighting and climate control based on real-time employee foot traffic.",
      "Home to the largest global operations technology hub, designing the high-speed robotics routing algorithms for fulfillment centers worldwide.",
      "Features beautiful sky-gardens, modular high-tech wellness zones, and full organic dining operations for multiple engineering shifts."
    ],
    teams: [
      "AWS Deep Learning & Generative AI",
      "Amazon Global Robotics Software",
      "Fulfillment & Supply Chain Tech"
    ],
    stats: [
      { label: "Skyscraper Height", value: "30+ storeys" },
      { label: "Core Focus", value: "Deep Learning & Robotics" },
      { label: "Smart Energy", value: "Net-Zero Ready" },
      { label: "Collaboration Pods", value: "250+ Interactive Labs" }
    ],
    coordinates: { lat: 12.9716, lng: 77.5946 },
    color: "#EC4899", // Vivid Pink/Rose
    glowColor: "rgba(236, 72, 153, 0.8)",
    planetClass: "pluto",
    sizeMultiplier: 1.4,
    emoji: "🚀",
    imageUrl: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    achievements: [
      { title: "AWS Robotic Fleet Software", description: "Authored deep autonomous pathfinding and collision avoidance loops managing 750,000+ robotic drive units in global centers." },
      { title: "Smart-Grid Skyscraper", description: "Pioneered a smart 30+ story building structure that matches carbon-neutral footprints through occupancy-based cooling systems." },
      { title: "DeepRacer Testing Course", description: "Built an indoor high-speed race course for testing physical DeepRacer autonomous vehicles driven by custom-trained AI." }
    ],
    tourGuide: {
      headline: "The Robotic SkyPeak",
      badgeAccess: "Free Employee Blue Badge Access",
      visitorTips: "Visit the high-level sky gardens overlooking the Bengaluru tech sector, try running an AI race car on the DeepRacer track, and brainstorm at the digital smart-tables."
    }
  }
];


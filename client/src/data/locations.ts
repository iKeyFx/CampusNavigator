export interface Location {
  id: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
  category: string;
  campus: "gidan-kwano" | "bosso";
  icon: string;
}

// export const locations: Location[] = [
//   // Gidan Kwano Campus
//   {
//     id: "school-of-engineering",
//     name: "School of Engineering",
//     description: "The main engineering building housing various engineering departments",
//     lat: 9.5236,
//     lng: 6.4500,
//     category: "Academic Building",
//     campus: "gidan-kwano",
//     icon: "fas fa-building"
//   },
//   {
//     id: "ict-complex",
//     name: "ICT Complex",
//     description: "The central computing facility for students and staff",
//     lat: 9.5240,
//     lng: 6.4530,
//     category: "Academic Building",
//     campus: "gidan-kwano",
//     icon: "fas fa-laptop"
//   },
//   {
//     id: "seet-building",
//     name: "SEET Building",
//     description: "School of Electrical Engineering and Technology building",
//     lat: 9.53388,
//     lng: 6.44931,
//     category: "Academic Building",
//     campus: "gidan-kwano",
//     icon: "fas fa-microchip"
//   },
//   {
//     id: "jakaranda-hostel",
//     name: "Jakaranda Hostel",
//     description: "Student accommodation for Gidan Kwano campus",
//     lat: 9.5250,
//     lng: 6.4510,
//     category: "Hostel",
//     campus: "gidan-kwano",
//     icon: "fas fa-bed"
//   },
//   {
//     id: "lappaz-restaurant",
//     name: "Lappaz Restaurant",
//     description: "Popular student restaurant on Gidan Kwano campus",
//     lat: 9.5260,
//     lng: 6.4520,
//     category: "Food",
//     campus: "gidan-kwano",
//     icon: "fas fa-utensils"
//   },
//   {
//     id: "gidan-kwano-library",
//     name: "Gidan Kwano Library",
//     description: "The main library on Gidan Kwano campus",
//     lat: 9.5255,
//     lng: 6.4505,
//     category: "Academic Building",
//     campus: "gidan-kwano",
//     icon: "fas fa-book"
//   },
//   {
//     id: "main-gate-gk",
//     name: "Main Gate",
//     description: "The main entrance to Gidan Kwano campus",
//     lat: 9.5270,
//     lng: 6.4490,
//     category: "Services",
//     campus: "gidan-kwano",
//     icon: "fas fa-door-open"
//   },
//   {
//     id: "futminna-bank",
//     name: "Campus Bank",
//     description: "Banking services for students and staff",
//     lat: 9.5265,
//     lng: 6.4525,
//     category: "Services",
//     campus: "gidan-kwano",
//     icon: "fas fa-university"
//   },
  
//   // Bosso Campus
//   {
//     id: "admin-building",
//     name: "Administration Building",
//     description: "The main administrative building of FUTMINNA",
//     lat: 9.6766,
//     lng: 6.5464,
//     category: "Administrative",
//     campus: "bosso",
//     icon: "fas fa-landmark"
//   },
//   {
//     id: "danhajiya-hostel",
//     name: "Danhajiya Hostel",
//     description: "Student accommodation on Bosso campus",
//     lat: 9.6770,
//     lng: 6.5470,
//     category: "Hostel",
//     campus: "bosso",
//     icon: "fas fa-bed"
//   },
//   {
//     id: "sps-building",
//     name: "SPS Building",
//     description: "School of Physical Sciences building",
//     lat: 9.6780,
//     lng: 6.5465,
//     category: "Academic Building",
//     campus: "bosso",
//     icon: "fas fa-flask"
//   },
//   {
//     id: "bosso-library",
//     name: "Bosso Library",
//     description: "The main library on Bosso campus",
//     lat: 9.6775,
//     lng: 6.5460,
//     category: "Academic Building",
//     campus: "bosso",
//     icon: "fas fa-book"
//   },
//   {
//     id: "futminna-clinic",
//     name: "FUTMINNA Clinic",
//     description: "Medical center providing healthcare services",
//     lat: 9.6785,
//     lng: 6.5475,
//     category: "Services",
//     campus: "bosso",
//     icon: "fas fa-first-aid"
//   },
//   {
//     id: "main-gate-bosso",
//     name: "Main Gate",
//     description: "The main entrance to Bosso campus",
//     lat: 9.6790,
//     lng: 6.5450,
//     category: "Services",
//     campus: "bosso",
//     icon: "fas fa-door-open"
//   },
//   {
//     id: "sls-building",
//     name: "SLS Building",
//     description: "School of Life Sciences building",
//     lat: 9.6795,
//     lng: 6.5465,
//     category: "Academic Building",
//     campus: "bosso",
//     icon: "fas fa-leaf"
//   },
//   {
//     id: "bosso-cafeteria",
//     name: "Bosso Cafeteria",
//     description: "The main cafeteria on Bosso campus",
//     lat: 9.6795,
//     lng: 6.5470,
//     category: "Food",
//     campus: "bosso",
//     icon: "fas fa-utensils"
//   }
// ];

export const locations: Location[] = [

  // Gidan Kwano Campus
  // FUTMinna Gidan Kwano Campus Locations
  // Academic Buildings
  { 
    id: "school-of-engineering", 
    name: "School of Engineering", 
    description: "The main engineering building housing various engineering departments including Civil, Mechanical, Electrical, and Chemical Engineering", 
    lat: 9.533983, 
    lng: 6.448819, 
    category: "Academic Building", 
    campus: "gidan-kwano", 
    icon: "fas fa-building" 
  },
  { 
    id: "seet", 
    name: "School of Environmental Technology (SEET)", 
    description: "Houses departments like Architecture, Building Technology, Estate Management, Quantity Surveying, and Urban & Regional Planning", 
    lat: 9.534703, 
    lng: 6.450477, 
    category: "Academic Building", 
    campus: "gidan-kwano", 
    icon: "fas fa-drafting-compass" 
  },
  { 
    id: "sict", 
    name: "School of Information & Communication Technology (SICT)", 
    description: "Houses Computer Science, Cyber Security, Information Technology departments with computer labs", 
    lat: 9.531276, 
    lng: 6.451603, 
    category: "Academic Building", 
    campus: "gidan-kwano", 
    icon: "fas fa-laptop-code" 
  },
  { 
    id: "senate-building", 
    name: "Senate Building", 
    description: "Administrative headquarters with offices for the Vice-Chancellor and other key university officials", 
    lat: 9.534037, 
    lng: 6.452934, 
    category: "Administrative", 
    campus: "gidan-kwano", 
    icon: "fas fa-university" 
  },
  { 
    id: "saat", 
    name: "School of Agriculture & Agricultural Technology (SAAT)", 
    description: "Houses departments related to agriculture including laboratories and research facilities", 
    lat: 9.53293, 
    lng: 6.45197, 
    category: "Academic Building", 
    campus: "gidan-kwano", 
    icon: "fas fa-leaf" 
  },
  { 
    id: "sps", 
    name: "School of Physical Sciences (SPS)", 
    description: "Houses Chemistry, Physics, Mathematics and other natural science departments", 
    lat:  9.542491786272704, 
    lng: 6.44776780541339,
    category: "Academic Building", 
    campus: "gidan-kwano", 
    icon: "fas fa-atom" 
  },
  
  // Libraries & Research Centers

  { 
    id: "university-library", 
    name: "University Library", 
    description: "Central library with extensive collection of books, journals, and electronic resources", 
    lat: 9.53514, 
    lng: 6.45314, 
    category: "Library", 
    campus: "gidan-kwano", 
    icon: "fas fa-book" 
  },
  { 
    id: "ict-center", 
    name: "ICT Center", 
    description: "Information and Communication Technology hub with internet facilities and computer labs", 
    lat: 9.53588, 
    lng: 6.45022, 
    category: "Technology Center", 
    campus: "gidan-kwano", 
    icon: "fas fa-server" 
  },
  
  // Amenities
  { 
    id: "school-auditorium",
    name: "School Auditorium", 
    description: "Large venue for university events, conferences, and ceremonies", 
    lat: 9.53538, 
    lng: 6.45179, 
    category: "Facility", 
    campus: "gidan-kwano", 
    icon: "fas fa-archway" 
  },
  { 
    id: "its-center", 
    name: "ITS Center", 
    description: "Hub for student activities, union offices, and recreational facilities", 
    lat: 9.53559, 
    lng: 6.64218, 
    category: "Student Service", 
    campus: "gidan-kwano", 
    icon: "fas fa-users" 
  },
  
  // Hostels
  { 
    id: "newest-hostel", 
    name: "Newest Hostel", 
    description: "On-campus accommodation for male students", 
    lat: 9.532736, 
    lng: 6.440177, 
    category: "Hostel", 
    campus: "gidan-kwano", 
    icon: "fas fa-home" 
  },
  { 
    id: "new-girl-hostel", 
    name: "New Girl's Hostel", 
    description: "On-campus accommodation for Girl students", 
    lat: 9.530240, 
    lng: 6.442773, 
    category: "Hostel", 
    campus: "gidan-kwano", 
    icon: "fas fa-home" 
  },
  { 
    id: "old-boy-hostel-a", 
    name: "Old Boy's Hostel A", 
    description: "On-campus accommodation for male students", 
    lat: 9.530947, 
    lng: 6.442162, 
    category: "Hostel", 
    campus: "gidan-kwano", 
    icon: "fas fa-home" 
  },
  { 
    id: "old-boy-hostel-b", 
    name: "Old Boy's Hostel B",
    description: "On-campus accommodation for male students", 
    lat: 9.530259, 
    lng: 6.442183, 
    category: "Hostel", 
    campus: "gidan-kwano", 
    icon: "fas fa-home" 
  },
  { 
    id: "old-girl-hostel-b", 
    name: "Old Girl's Hostel B",
    description: "On-campus accommodation for female students", 
    lat: 9.530259, 
    lng: 6.442183, 
    category: "Hostel", 
    campus: "gidan-kwano", 
    icon: "fas fa-home" 
  },
  // Sports Facilities
  { 
    id: "sports-complex", 
    name: "Sports Complex", 
    description: "Includes football field, basketball courts, volleyball courts, and other sports facilities", 
    lat: 9.533052, 
    lng: 6.445509, 
    category: "Sports", 
    campus: "gidan-kwano", 
    icon: "fas fa-futbol" 
  },
  
  // Services
  { 
    id: "health-center", 
    name: "University Health Center", 
    description: "Medical facility providing healthcare services to students and staff", 
    lat: 9.532421, 
    lng: 6.445957, 
    category: "Health Service", 
    campus: "gidan-kwano", 
    icon: "fas fa-hospital" 
  },
  { 
    id: "union-bank", 
    name: "Union Bank", 
    description: "Banking services and ATM facilities for students and staff", 
    lat: 9.53620, 
    lng: 6.45177, 
    category: "Service", 
    campus: "gidan-kwano", 
    icon: "fas fa-landmark" 
  },
  { 
    id: "h&m-garden", 
    name: "H & M Garden",
    description: "A recreational area with gardens and seating for relaxation", 
    lat: 9.53259, 
    lng: 6.44966, 
    category: "Food", 
    campus: "gidan-kwano", 
    icon: "fas fa-utensils" 
  },
  { 
    id: "post-office",
    name: "Post Office",  
    description: "Area with shops and services for various student needs", 
    lat: 9.53296, 
    lng: 6.45008, 
    category: "Commercial", 
    campus: "gidan-kwano", 
    icon: "fas fa-store" 
  },
  
  // Transportation
  
  { 
    id: "bus-stop", 
    name: "Bus park", 
    description: "Main transportation hub for campus shuttle services", 
    lat: 9.53616, 
    lng: 6.45548, 
    category: "Transportation", 
    campus: "gidan-kwano", 
    icon: "fas fa-bus" 
  },
  
  // Religious Facilities
  { 
    id: "mosque", 
    name: "Central Mosque", 
    description: "Campus mosque for Muslim prayers and religious activities", 
    lat: 9.53623, 
    lng: 6.45850, 
    category: "Religious", 
    campus: "gidan-kwano", 
    icon: "fas fa-mosque" 
  },
  { 
    id: "chapel-of-grace", 
    name: "Chapel Of Grace", 
    description: "Christian worship center for religious services", 
    lat: 9.53561, 
    lng: 6.44384, 
    category: "Religious", 
    campus: "gidan-kwano", 
    icon: "fas fa-church" 
  },

  //   // Bosso Campus
   // Administrative Buildings
   { 
    id: "old-senate-building", 
    name: "Old Senate Building", 
    description: "Original administrative headquarters of the university with various administrative offices", 
    lat: 9.6514, 
    lng: 6.5425, 
    category: "Administrative", 
    campus: "bosso", 
    icon: "fas fa-university" 
  },
  { 
    id: "admin-block", 
    name: "Administrative Block", 
    description: "Houses key administrative departments including Registry, Bursary, and Academic Planning", 
    lat: 9.6508, 
    lng: 6.5428, 
    category: "Administrative", 
    campus: "bosso", 
    icon: "fas fa-building" 
  },
  
  // Academic Buildings
  { 
    id: "sls", 
    name: "School of Life Sciences (SLS)", 
    description: "Houses departments like Biochemistry, Microbiology, and Biology with laboratories", 
    lat: 9.6520, 
    lng: 6.5415, 
    category: "Academic Building", 
    campus: "bosso", 
    icon: "fas fa-dna" 
  },
  { 
    id: "seet-bosso", 
    name: "School of Environmental Technology (SEET) - Bosso Complex", 
    description: "Older facilities for architectural and environmental programs", 
    lat: 9.6518, 
    lng: 6.5422, 
    category: "Academic Building", 
    campus: "bosso", 
    icon: "fas fa-drafting-compass" 
  },
  { 
    id: "education", 
    name: "School of Education", 
    description: "Houses teacher training programs and education-related departments", 
    lat: 9.6525, 
    lng: 6.5418, 
    category: "Academic Building", 
    campus: "bosso", 
    icon: "fas fa-chalkboard-teacher" 
  },
  { 
    id: "semt", 
    name: "School of Entrepreneurship and Management Technology (SEMT)", 
    description: "Houses business and management programs including Entrepreneurship Development Center", 
    lat: 9.6681, 
    lng: 6.5475, 
    category: "Academic Building", 
    campus: "bosso", 
    icon: "fas fa-briefcase" 
  },
  
  // Libraries & Research Centers
  { 
    id: "bosso-library", 
    name: "Bosso Campus Library", 
    description: "Library facility serving the Bosso Campus with study areas and research resources", 
    lat: 9.65482, 
    lng: 6.52828, 
    category: "Library", 
    campus: "bosso", 
    icon: "fas fa-book" 
  },
  { 
    id: "computer-lab", 
    name: "Central Computer Laboratory", 
    description: "Computing facility for students with internet access and technical support", 
    lat: 9.6505, 
    lng: 6.5420, 
    category: "Technology Center", 
    campus: "bosso", 
    icon: "fas fa-desktop" 
  },
  
  // Hostels
  { 
    id: "bosso-male-hostel", 
    name: "Bosso Male Hostel", 
    description: "On-campus accommodation for male students at Bosso Campus", 
    lat: 9.6535, 
    lng: 6.5445, 
    category: "Hostel", 
    campus: "bosso", 
    icon: "fas fa-home" 
  },
  { 
    id: "bosso-female-hostel", 
    name: "Bosso Female Hostel", 
    description: "On-campus accommodation for female students at Bosso Campus", 
    lat: 9.6540, 
    lng: 6.5440, 
    category: "Hostel", 
    campus: "bosso", 
    icon: "fas fa-home" 
  },
  { 
    id: "pg-hostel", 
    name: "Postgraduate Hostel", 
    description: "Dedicated accommodation for postgraduate students", 
    lat: 9.6538, 
    lng: 6.5435, 
    category: "Hostel", 
    campus: "bosso", 
    icon: "fas fa-home" 
  },
  { 
    id: "block-l-hostel", 
    name: "Block L Hostel", 
    description: "Dedicated accommodation for postgraduate students", 
    lat: 9.65424, 
    lng: 6.52785, 
    category: "Hostel", 
    campus: "bosso", 
    icon: "fas fa-home" 
  },
  
  // Amenities
  { 
    id: "bosso-student-center", 
    name: "Student Union Building", 
    description: "Headquarters for student government and activities", 
    lat: 9.6528, 
    lng: 6.5432, 
    category: "Student Service", 
    campus: "bosso", 
    icon: "fas fa-users" 
  },
  { 
    id: "bosso-hall", 
    name: "Bosso Campus Hall", 
    description: "Auditorium for events, seminars, and ceremonies", 
    lat: 9.6510, 
    lng: 6.5438, 
    category: "Facility", 
    campus: "bosso", 
    icon: "fas fa-landmark" 
  },
  
  // Sports Facilities
  { 
    id: "bosso-sports-ground", 
    name: "Bosso Sports Ground", 
    description: "Athletic facilities including football field and basketball court", 
    lat: 9.6495, 
    lng: 6.5405, 
    category: "Sports", 
    campus: "bosso", 
    icon: "fas fa-futbol" 
  },
  
  // Services
  { 
    id: "bosso-health-center", 
    name: "Bosso Health Center", 
    description: "Medical clinic serving the Bosso Campus community", 
    lat: 9.6532, 
    lng: 6.5425, 
    category: "Health Service", 
    campus: "bosso", 
    icon: "fas fa-hospital" 
  },
  { 
    id: "bosso-cafeteria", 
    name: "Bosso Cafeteria", 
    description: "Main dining facility for Bosso Campus", 
    lat: 9.6525, 
    lng: 6.5440, 
    category: "Food", 
    campus: "bosso", 
    icon: "fas fa-utensils" 
  },
  { 
    id: "bosso-market", 
    name: "Bosso Campus Market", 
    description: "Small market area with various shops and services", 
    lat: 9.6527, 
    lng: 6.5445, 
    category: "Commercial", 
    campus: "bosso", 
    icon: "fas fa-store" 
  },
  { 
    id: "bosso-bank", 
    name: "Campus Bank Branch", 
    description: "Banking services and ATM facilities", 
    lat: 9.6518, 
    lng: 6.5435, 
    category: "Service", 
    campus: "bosso", 
    icon: "fas fa-landmark" 
  },
  
  // Transportation
  { 
    id: "bosso-main-gate", 
    name: "Bosso Main Gate", 
    description: "Primary entrance to Bosso Campus with security checkpoint", 
    lat: 9.6490, 
    lng: 6.5400, 
    category: "Access Point", 
    campus: "bosso", 
    icon: "fas fa-door-open" 
  },
  { 
    id: "bosso-bus-park", 
    name: "Bosso Bus Park", 
    description: "Transportation hub for campus shuttles and public transport", 
    lat: 9.6492, 
    lng: 6.5405, 
    category: "Transportation", 
    campus: "bosso", 
    icon: "fas fa-bus" 
  },
  
  // Religious Facilities
  { 
    id: "bosso-mosque", 
    name: "Bosso Campus Mosque", 
    description: "Islamic prayer facility", 
    lat: 9.6530, 
    lng: 6.5415, 
    category: "Religious", 
    campus: "bosso", 
    icon: "fas fa-mosque" 
  },
  { 
    id: "bosso-chapel", 
    name: "Bosso Campus Chapel", 
    description: "Christian worship center", 
    lat: 9.6532, 
    lng: 6.5410, 
    category: "Religious", 
    campus: "bosso", 
    icon: "fas fa-church" 
  },
  
  // Additional Facilities
  { 
    id: "vocational-center", 
    name: "Vocational Skills Acquisition Center", 
    description: "Facility for hands-on technical and vocational training", 
    lat: 9.6515, 
    lng: 6.5450, 
    category: "Training Center", 
    campus: "bosso", 
    icon: "fas fa-tools" 
  },
  { 
    id: "alumni-center", 
    name: "Alumni Relations Office", 
    description: "Center for alumni affairs and engagement", 
    lat: 9.6512, 
    lng: 6.5432, 
    category: "Administrative", 
    campus: "bosso", 
    icon: "fas fa-user-graduate" 
  },
  { 
    id: "entrepreneurship-center", 
    name: "Entrepreneurship Development Center", 
    description: "Facility for fostering innovation and entrepreneurship among students", 
    lat: 9.6522, 
    lng: 6.5430, 
    category: "Training Center", 
    campus: "bosso", 
    icon: "fas fa-lightbulb" 
  }
  ]
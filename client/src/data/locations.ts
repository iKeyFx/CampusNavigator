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

export const locations: Location[] = [
  // Gidan Kwano Campus
  {
    id: "school-of-engineering",
    name: "School of Engineering",
    description: "The main engineering building housing various engineering departments",
    lat: 9.5236,
    lng: 6.4500,
    category: "Academic Building",
    campus: "gidan-kwano",
    icon: "fas fa-building"
  },
  {
    id: "ict-complex",
    name: "ICT Complex",
    description: "The central computing facility for students and staff",
    lat: 9.5240,
    lng: 6.4530,
    category: "Academic Building",
    campus: "gidan-kwano",
    icon: "fas fa-laptop"
  },
  {
    id: "seet-building",
    name: "SEET Building",
    description: "School of Electrical Engineering and Technology building",
    lat: 9.5245,
    lng: 6.4515,
    category: "Academic Building",
    campus: "gidan-kwano",
    icon: "fas fa-microchip"
  },
  {
    id: "jakaranda-hostel",
    name: "Jakaranda Hostel",
    description: "Student accommodation for Gidan Kwano campus",
    lat: 9.5250,
    lng: 6.4510,
    category: "Hostel",
    campus: "gidan-kwano",
    icon: "fas fa-bed"
  },
  {
    id: "lappaz-restaurant",
    name: "Lappaz Restaurant",
    description: "Popular student restaurant on Gidan Kwano campus",
    lat: 9.5260,
    lng: 6.4520,
    category: "Food",
    campus: "gidan-kwano",
    icon: "fas fa-utensils"
  },
  {
    id: "gidan-kwano-library",
    name: "Gidan Kwano Library",
    description: "The main library on Gidan Kwano campus",
    lat: 9.5255,
    lng: 6.4505,
    category: "Academic Building",
    campus: "gidan-kwano",
    icon: "fas fa-book"
  },
  {
    id: "main-gate-gk",
    name: "Main Gate",
    description: "The main entrance to Gidan Kwano campus",
    lat: 9.5270,
    lng: 6.4490,
    category: "Services",
    campus: "gidan-kwano",
    icon: "fas fa-door-open"
  },
  {
    id: "futminna-bank",
    name: "Campus Bank",
    description: "Banking services for students and staff",
    lat: 9.5265,
    lng: 6.4525,
    category: "Services",
    campus: "gidan-kwano",
    icon: "fas fa-university"
  },
  
  // Bosso Campus
  {
    id: "admin-building",
    name: "Administration Building",
    description: "The main administrative building of FUTMINNA",
    lat: 9.6766,
    lng: 6.5464,
    category: "Administrative",
    campus: "bosso",
    icon: "fas fa-landmark"
  },
  {
    id: "danhajiya-hostel",
    name: "Danhajiya Hostel",
    description: "Student accommodation on Bosso campus",
    lat: 9.6770,
    lng: 6.5470,
    category: "Hostel",
    campus: "bosso",
    icon: "fas fa-bed"
  },
  {
    id: "sps-building",
    name: "SPS Building",
    description: "School of Physical Sciences building",
    lat: 9.6780,
    lng: 6.5465,
    category: "Academic Building",
    campus: "bosso",
    icon: "fas fa-flask"
  },
  {
    id: "bosso-library",
    name: "Bosso Library",
    description: "The main library on Bosso campus",
    lat: 9.6775,
    lng: 6.5460,
    category: "Academic Building",
    campus: "bosso",
    icon: "fas fa-book"
  },
  {
    id: "futminna-clinic",
    name: "FUTMINNA Clinic",
    description: "Medical center providing healthcare services",
    lat: 9.6785,
    lng: 6.5475,
    category: "Services",
    campus: "bosso",
    icon: "fas fa-first-aid"
  },
  {
    id: "main-gate-bosso",
    name: "Main Gate",
    description: "The main entrance to Bosso campus",
    lat: 9.6790,
    lng: 6.5450,
    category: "Services",
    campus: "bosso",
    icon: "fas fa-door-open"
  },
  {
    id: "sls-building",
    name: "SLS Building",
    description: "School of Life Sciences building",
    lat: 9.6795,
    lng: 6.5465,
    category: "Academic Building",
    campus: "bosso",
    icon: "fas fa-leaf"
  },
  {
    id: "bosso-cafeteria",
    name: "Bosso Cafeteria",
    description: "The main cafeteria on Bosso campus",
    lat: 9.6795,
    lng: 6.5470,
    category: "Food",
    campus: "bosso",
    icon: "fas fa-utensils"
  }
];

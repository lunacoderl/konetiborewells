// Gallery items representing real field work across Visakhapatnam
// Sourced from public/gallery images and public/video-showcase field videos

export const galleryItems = [
  {
    id: 'video-drilling-rig-action',
    src: '/video-showcase/video1.mp4',
    type: 'video',
    category: 'videos',
    categoryLabel: 'Live Site Video',
    title: 'Pneumatic DTH Drilling Rig in Action',
    location: 'Visakhapatnam Site Operation',
    description: 'On-site field recording of heavy pneumatic DTH hammer drilling through rock formations.',
    aspectRatio: 'tall',
    width: 360,
    height: 640,
    badge: 'LIVE FIELD REEL',
    featured: true
  },
  {
    id: 'video-water-flushing-strike',
    src: '/video-showcase/video2.mp4',
    type: 'video',
    category: 'videos',
    categoryLabel: 'Live Site Video',
    title: 'High-Pressure Borehole Flushing & Water Strike',
    location: 'Visakhapatnam Site Execution',
    description: 'Real video capture of air compressor clearing silt and discharging fresh groundwater from borehole.',
    aspectRatio: 'tall',
    width: 478,
    height: 850,
    badge: 'LIVE FIELD REEL',
    featured: true
  },
  {
    id: 'rig-mast-vertical',
    src: '/gallery/d1da12ff-e9f1-40b1-bbe8-2a01b75e3b1d.jpg',
    type: 'image',
    category: 'drilling',
    categoryLabel: 'Drilling Operations',
    title: 'Pneumatic DTH Rig Mast on Site',
    location: 'Madhurawada, Visakhapatnam',
    description: 'Heavy vertical drilling mast aligned and penetrating granite bedrock.',
    aspectRatio: 'tall', // 902 x 1600
    width: 902,
    height: 1600
  },
  {
    id: 'field-drilling-wide',
    src: '/gallery/358effc0-0075-4b02-bc59-d2d0306749e2.jpg',
    type: 'image',
    category: 'projects',
    categoryLabel: 'Commercial Projects',
    title: 'Open Site Rig Deployment',
    location: 'Anandapuram Region, Vizag',
    description: 'Commercial borewell drilling in progress with heavy auxiliary compressor.',
    aspectRatio: 'wide', // 1600 x 719
    width: 1600,
    height: 719
  },
  {
    id: 'operator-controls',
    src: '/gallery/533b520a-9f5c-47e5-b7d0-1293ce3ff5ef.jpg',
    type: 'image',
    category: 'equipment',
    categoryLabel: 'Rig Machinery',
    title: 'Rig Hydraulic Controls & Pressure Monitoring',
    location: 'Seethammadara, Visakhapatnam',
    description: 'Experienced rig technician actively balancing hydraulic feed and air pressure.',
    aspectRatio: 'portrait', // 960 x 1015
    width: 960,
    height: 1015
  },
  {
    id: 'rock-drilling-dust',
    src: '/gallery/8eebdfbf-b47a-4ea1-b243-c71452559b80.jpg',
    type: 'image',
    category: 'drilling',
    categoryLabel: 'Drilling Operations',
    title: 'High-Velocity Rock Powder Discharge',
    location: 'MVP Colony, Visakhapatnam',
    description: 'Air compressor expelling pulverized rock cuttings from 300+ ft depth.',
    aspectRatio: 'wide', // 1600 x 719
    width: 1600,
    height: 719
  },
  {
    id: 'casing-assembly',
    src: '/gallery/b3046981-f747-47ff-9619-d7830cb59262.jpg',
    type: 'image',
    category: 'water-motors',
    categoryLabel: 'Casing & Motors',
    title: 'Heavy Casing Pipe Insertion & Jointing',
    location: 'Rushikonda, Visakhapatnam',
    description: 'Lowering rigid casing pipe sections to stabilize upper loose sand layers.',
    aspectRatio: 'square', // 728 x 757
    width: 728,
    height: 757
  },
  {
    id: 'drilling-team-work',
    src: '/gallery/ce628897-e19f-46c4-a917-9c606ebbb968.jpg',
    type: 'image',
    category: 'projects',
    categoryLabel: 'Site Projects',
    title: 'Field Operators Managing Drill Rod Coupling',
    location: 'Gajuwaka Industrial Belt',
    description: 'Drilling crew carefully adding drill rod extensions during deep bore execution.',
    aspectRatio: 'landscape', // 1599 x 899
    width: 1599,
    height: 899
  },
  {
    id: 'water-strike-discharge',
    src: '/gallery/d59404eb-9100-4510-8f7e-8594d7c16b96.jpg',
    type: 'image',
    category: 'water-motors',
    categoryLabel: 'Water Strike',
    title: 'Fresh Groundwater Gushing from Borehole',
    location: 'Bheemunipatnam (Bheemili)',
    description: 'Abundant clean water discharge reached upon entering deep subterranean fissure.',
    aspectRatio: 'landscape', // 1599 x 899
    width: 1599,
    height: 899
  },
  {
    id: 'field-operations-panoramic',
    src: '/gallery/5a746f4f-166d-4cab-9a4d-0d20b06ea7f1.jpg',
    type: 'image',
    category: 'drilling',
    categoryLabel: 'Drilling Operations',
    title: 'Agricultural Borewell Project Execution',
    location: 'Pendurthi Suburb, Vizag',
    description: 'Full panorama of rig and support trucks working on an agricultural bore project.',
    aspectRatio: 'landscape', // 1599 x 899
    width: 1599,
    height: 899
  }
];

export const siteVideos = galleryItems.filter((item) => item.type === 'video');

export const galleryCategories = [
  { id: 'all', label: 'All Media' },
  { id: 'videos', label: 'Site Videos 🎥' },
  { id: 'drilling', label: 'Drilling Rigs' },
  { id: 'equipment', label: 'Machinery & Tools' },
  { id: 'projects', label: 'Site Operations' },
  { id: 'water-motors', label: 'Water & Motors' }
];

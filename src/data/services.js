// Central Service Data Configuration for Koneti Borewells & Motors
// Drives both Homepage Service Cards and the Reusable ServiceDetails Page

export const services = [
  {
    slug: 'borewell-drilling',
    title: '4½" & 6½" Borewell Drilling Services',
    shortTitle: 'Borewell Drilling',
    category: 'Heavy Rig Drilling',
    badge: 'Core Specialty',
    featured: true,
    thumbnail: '/services/borewelldrilling.png',
    featuredImage: '/services/8d0b2f57-4a7a-41f5-983d-236d1c9bc9fa.png',
    sideImage: '/borewells.png',
    tagline: 'High-pressure pneumatic DTH hammer drilling for residential, farm, and commercial grounds.',
    
    hero: {
      eyebrow: 'BOREWELL DRILLING • 4½" & 6½" CALIBER',
      h1: 'Borewell Drilling Services in Visakhapatnam',
      statement: 'Precision Borewell Drilling Down to Groundwater Aquifers.',
      description: 'Equipped with heavy-duty pneumatic rotary rigs and DTH hammers, Koneti Borewells & Motors executes precision drilling through hard granite and coastal strata across Visakhapatnam.',
      image: '/services/8d0b2f57-4a7a-41f5-983d-236d1c9bc9fa.png',
      alt: 'Borewell drilling rig machine operating at a work site in Visakhapatnam',
      badgeText: '24/7 Deployment Available'
    },

    quickFacts: [
      { label: 'Available Sizes', value: '4½" & 6½" Diameters', icon: 'Disc' },
      { label: 'Terrain Compatibility', value: 'Granite, Hard Rock & Coastal Sand', icon: 'Layers' },
      { label: 'Applications', value: 'Homes, Farms, Commercial, Sites', icon: 'Building' },
      { label: 'Base Location', value: 'Seethammadara, Vizag (City-wide)', icon: 'MapPin' },
      { label: 'Operational Hours', value: '24 Hours / 7 Days Active', icon: 'Clock' },
      { label: 'Casing Materials', value: 'Heavy Duty PVC & MS Steel', icon: 'ShieldCheck' }
    ],

    overview: {
      h2: 'Engineered Borewell Drilling Built for Vizag Geology',
      lead: 'Visakhapatnam features unique geological conditions ranging from coastal sandy aquifers to hard crystalline granite bedrock in elevated colonies.',
      paragraphs: [
        'At Koneti Borewells & Motors, we approach every drilling assignment with practical site assessment. From Lalitha Colony in Seethammadara to expanding layouts in Madhurawada, Rushikonda, and Anandapuram, our crew evaluates access paths, surface stability, and proximity to structures before setting the rig.',
        'Using advanced high-pressure pneumatic compressors and durable DTH (Down-The-Hole) hammer bits, we drill clean, vertical boreholes in standard 4½-inch and 6½-inch configurations. Continuous monitoring ensures casing pipe is lowered through loose overburden to protect your well from caving in, sealing out surface impurities.',
        'Whether you require an independent domestic water source for a new home or deep agricultural yield for farmlands, our team delivers transparent guidance, dependable machinery, and round-the-clock assistance.'
      ]
    },

    highlights: [
      {
        number: '01',
        title: 'Calibrated 4½" & 6½" Rigs',
        description: 'Selected based on your site footprint and volume demand, ensuring optimum casing seating and motor compatibility.',
        icon: 'Wrench'
      },
      {
        number: '02',
        title: 'Hard Rock & Granite Mastery',
        description: 'Heavy pneumatic hammer technology easily penetrates hard Eastern Ghats granites without borehole deviation.',
        icon: 'Mountain'
      },
      {
        number: '03',
        title: 'Protective Casing Integrity',
        description: 'High-grade PVC or Mild Steel casing pipes securely placed through loose upper strata prevent collapse and contamination.',
        icon: 'ShieldCheck'
      },
      {
        number: '04',
        title: 'Direct Field Coordination',
        description: 'Clear operational communication with the property owner at each depth interval, water strike, and final discharge test.',
        icon: 'PhoneCall'
      }
    ],

    applications: [
      {
        title: 'Residential Homes & Villas',
        tag: 'Domestic Water Independence',
        description: 'Compact rig setups suited for residential plots, narrow street access, and independent homes seeking dependable daily water.',
        image: '/borewell-sideview.png'
      },
      {
        title: 'Agricultural Lands & Farms',
        tag: 'Irrigation & Farming Yield',
        description: 'High-capacity 6½" borewells for farms, coconut groves, and drip irrigation setups in Anandapuram, Bheemili, and rural zones.',
        image: '/gallery/5a746f4f-166d-4cab-9a4d-0d20b06ea7f1.jpg'
      },
      {
        title: 'Commercial & Multi-Unit',
        tag: 'Continuous Commercial Supply',
        description: 'Robust water solutions for apartment complexes, hospitals, hotels, educational campuses, and commercial buildings.',
        image: '/gallery/358effc0-0075-4b02-bc59-d2d0306749e2.jpg'
      },
      {
        title: 'Construction & Industrial Sites',
        tag: 'Heavy Project Requirements',
        description: 'Immediate water supply for civil construction works, mixing plants, and industrial properties in Gajuwaka and industrial corridors.',
        image: '/gallery/d1da12ff-e9f1-40b1-bbe8-2a01b75e3b1d.jpg'
      }
    ],

    process: [
      {
        step: '01',
        title: 'Requirement & Location Review',
        description: 'We discuss your property location, estimated daily water demand, and check access pathways for drilling equipment.',
        detail: 'Helps determine whether 4½" or 6½" caliber is most suitable for your property.'
      },
      {
        step: '02',
        title: 'Site Positioning & Alignment',
        description: 'Our senior drilling operator verifies overhead electrical cables, soil foundation, and optimal drilling points.',
        detail: 'Rig leveling and ground stabilization ensure straight vertical penetration.'
      },
      {
        step: '03',
        title: 'Pneumatic Rig Drilling',
        description: 'High-pressure air drilling begins through topsoil and weathered subsoil, followed by rock penetration using heavy DTH hammers.',
        detail: 'Continuous tracking of rock powder and moisture indications.'
      },
      {
        step: '04',
        title: 'Casing Pipe Installation',
        description: 'Protective casing pipe is securely lowered and seated into the hard rock stratum to prevent soil collapse and surface seepage.',
        detail: 'Slotted casing sections are positioned adjacent to water-bearing seams.'
      },
      {
        step: '05',
        title: 'Borewell Flushing & Yield Check',
        description: 'High-velocity air flushing clears all drilling sediment and rock silt until clean, sediment-free water discharges.',
        detail: 'Final yield observation and pump depth recommendation provided.'
      }
    ],

    technicalGuide: {
      title: 'What You Should Know Before Drilling',
      subtitle: 'Key Engineering Considerations for Visakhapatnam Property Owners',
      items: [
        {
          heading: '4½" vs 6½" Diameter Selection',
          content: '4½" borewells are widely preferred for independent homes and domestic requirements with modest water needs and tighter space constraints. 6½" borewells allow higher capacity submersible pumps, accommodate deeper installation, and provide greater yield for apartments, farms, and commercial buildings.'
        },
        {
          heading: 'Casing Depth & Ground Stabilization',
          content: 'The depth of casing pipe is governed entirely by the depth of soil overburden before firm rock is reached. In sandy coastal belts, casing must extend deeper to prevent borehole walls from collapsing inward.'
        },
        {
          heading: 'Water Yield & Geological Reality',
          content: 'Groundwater existence depends on underground fissure networks and aquifers. While experience in Vizag terrain guides optimal drilling, subterranean water yield varies by location and seasonal water table levels.'
        },
        {
          heading: 'Power & Rig Clearance',
          content: 'Borewell rigs require adequate overhead clearance from overhead electrical wires and an accessible approach path for the carrier vehicle.'
        }
      ]
    },

    gallery: [
      { url: '/gallery/d1da12ff-e9f1-40b1-bbe8-2a01b75e3b1d.jpg', alt: 'Tall drilling rig operating mast in field', caption: 'Heavy-duty DTH pneumatic rig positioned on site' },
      { url: '/gallery/358effc0-0075-4b02-bc59-d2d0306749e2.jpg', alt: 'Drilling operations in open terrain', caption: 'Continuous drilling in Visakhapatnam regional terrain' },
      { url: '/gallery/ce628897-e19f-46c4-a917-9c606ebbb968.jpg', alt: 'Operators managing borewell machinery', caption: 'Field operators monitoring drilling pressure' },
      { url: '/gallery/d59404eb-9100-4510-8f7e-8594d7c16b96.jpg', alt: 'Clean groundwater discharge', caption: 'Clear water strike emerging from completed borehole' }
    ],

    faqs: [
      {
        question: 'How do I choose between a 4½-inch and a 6½-inch borewell?',
        answer: '4½-inch borewells are ideal for individual homes, villas, and small plots where domestic water requirement is standard. 6½-inch borewells are recommended for agricultural lands, apartments, and commercial complexes that require larger submersible pump discharge and higher water output.'
      },
      {
        question: 'How much space does the drilling rig require to enter my property?',
        answer: 'Standard truck-mounted rigs require a minimum path width of 9 to 10 feet and overhead clearance free from low electrical wires or tree branches. For tighter urban plots, our team inspects the site first to confirm accessibility.'
      },
      {
        question: 'How long does a standard borewell drilling operation take?',
        answer: 'In most Visakhapatnam locations, drilling is typically completed within 6 to 12 hours depending on target depth and rock hardness. Casing installation and water flushing follow immediately.'
      },
      {
        question: 'Do you also supply and install the submersible pump and motor?',
        answer: 'Yes! Koneti Borewells & Motors provides complete end-to-end solutions including submersible motors, control panels, column pipes, and electrical setup, ensuring you get ready running water.'
      },
      {
        question: 'How do I get an accurate cost estimate for my location?',
        answer: 'Call us at 092466 22995 or use our interactive WhatsApp Quote button. Share your exact colony or neighborhood in Vizag and property type, and we will guide you on current drilling rates per foot and casing requirements.'
      }
    ],

    ctaContext: 'Hello Koneti Borewells & Motors, I would like to enquire about 4½" / 6½" Borewell Drilling services in Visakhapatnam.',
    relatedSlugs: ['pump-motor-solutions', 'borewell-cleaning-maintenance', 'groundwater-survey'],

    seo: {
      title: 'Borewell Drilling Services in Visakhapatnam | Koneti Borewells',
      description: 'Professional 4½" and 6½" borewell drilling services across Visakhapatnam. Heavy pneumatic rigs, experienced operators, 24/7 availability. Call 092466 22995.',
      canonical: 'https://www.konetiborewellsvizag.com/services/borewell-drilling'
    }
  },

  {
    slug: 'pump-motor-solutions',
    title: 'Water Pump & Motor Solutions',
    shortTitle: 'Pumps & Motors',
    category: 'Water Equipment',
    badge: 'Supply & Service',
    featured: false,
    thumbnail: '/services/pumpand-motorsupply.png',
    featuredImage: '/services/installationandfitting.png',
    sideImage: '/services/controlpanel.png',
    tagline: 'Quality submersible pumps, starter control panels, lowering & complete motor fitting.',

    hero: {
      eyebrow: 'WATER PUMP & MOTOR ENGINEERING',
      h1: 'Water Pump & Motor Solutions in Visakhapatnam',
      statement: 'Dependable Water Delivery from Deep Wells to Storage Tanks.',
      description: 'End-to-end pump solutions matching your borehole depth and water yield. We supply, install, wire, and service energy-efficient submersible pumps, compressors, and smart control panels.',
      image: '/services/pumpand-motorsupply.png',
      alt: 'Submersible water pump motor and installation equipment',
      badgeText: 'Complete Installation & Repairs'
    },

    quickFacts: [
      { label: 'Pump Types', value: 'Submersible, Jet, Open-well & Compressors', icon: 'Cpu' },
      { label: 'Motor Ratings', value: '0.5 HP to 15+ HP Capacities', icon: 'Zap' },
      { label: 'Piping Options', value: 'High-Tensile HDPE & Column Pipes', icon: 'Layers' },
      { label: 'Control Panels', value: 'Auto-cut, Overload & Dry-run Protected', icon: 'Sliders' },
      { label: 'Service Coverage', value: 'New Fitting, Replacement & Repair', icon: 'Wrench' },
      { label: 'Response Time', value: '24/7 Emergency Support in Vizag', icon: 'Clock' }
    ],

    overview: {
      h2: 'Precision Pump Matching for Lifetime Performance',
      lead: 'A well-drilled borewell is only as effective as the motor system installed inside it.',
      paragraphs: [
        'Selecting the wrong horsepower or pump stage can lead to dry running, frequent motor burnouts, or inadequate water pressure at your overhead tank. Koneti Borewells & Motors takes the guesswork out of pump installations.',
        'After observing your well depth, static water table, and discharge rate, our technicians specify the exact submersible pump stages and power needed. We handle complete mechanical lowering using heavy-gauge safety cables, durable column pipes, and submersible waterproof wire joints.',
        'We also provide prompt repair, motor rewinding, panel troubleshooting, and motor pulling services when existing units get stuck or face electrical surges across Visakhapatnam.'
      ]
    },

    highlights: [
      {
        number: '01',
        title: 'Calibrated Head & Discharge',
        description: 'Engineered motor sizing ensures optimal water pressure to multi-story tanks without overloading the pump.',
        icon: 'Gauge'
      },
      {
        number: '02',
        title: 'Heavy Duty Starter Panels',
        description: 'Equipped with digital voltmeters, dry-run protection, and automatic cutoffs to guard against voltage fluctuations.',
        icon: 'ShieldCheck'
      },
      {
        number: '03',
        title: 'Specialized Motor Lowering',
        description: 'Safe crane and tripod lowering using stainless steel safety cables guarantees zero pipe slippage into the well.',
        icon: 'Anchor'
      },
      {
        number: '04',
        title: 'Emergency Breakdown Care',
        description: '24/7 on-call technicians ready to assist when water supply is interrupted due to pump or starter failure.',
        icon: 'PhoneCall'
      }
    ],

    applications: [
      {
        title: 'Domestic Overhead Tanks',
        tag: 'Villas & Individual Homes',
        description: 'Smooth, silent 1 HP to 2 HP submersible pumps delivering clean water directly to terrace overhead tanks.',
        image: '/services/controlpanel.png'
      },
      {
        title: 'Apartment Sump & Wells',
        tag: 'Residential Communities',
        description: 'High-discharge multistage submersible pumps feeding overhead distribution tanks for multiple flats.',
        image: '/services/installationandfitting.png'
      },
      {
        title: 'Agricultural Irrigation',
        tag: 'Farm Borewells',
        description: 'High-volume 5 HP to 10+ HP motors engineered for long continuous duty in agricultural drip and sprinkler networks.',
        image: '/gallery/8eebdfbf-b47a-4ea1-b243-c71452559b80.jpg'
      },
      {
        title: 'Commercial Establishments',
        tag: 'Hotels & Institutions',
        description: 'Dual-pump setups with automated alternation panels ensuring uninterrupted commercial water flow.',
        image: '/gallery/533b520a-9f5c-47e5-b7d0-1293ce3ff5ef.jpg'
      }
    ],

    process: [
      {
        step: '01',
        title: 'Borewell Depth & Yield Audit',
        description: 'We measure the total well depth, static water table, and recovery rate to calculate the exact total dynamic head (TDH).',
        detail: 'Prevents installing oversized motors that rapidly dry out the borehole.'
      },
      {
        step: '02',
        title: 'Motor & Pipe Selection',
        description: 'Selection of optimal pump stages, motor HP, column pipe thickness, and waterproof 3-core submersible cabling.',
        detail: 'Full transparency on brand specifications and warranty terms.'
      },
      {
        step: '03',
        title: 'Secure Lowering & Joint Sealing',
        description: 'Technicians assemble column pipes with leak-proof threading, connect safety wires, and lower the motor unit to target depth.',
        detail: 'Joints sealed with vulcanized waterproof insulation tape.'
      },
      {
        step: '04',
        title: 'Starter Panel Integration',
        description: 'Control panel is wall-mounted and connected with circuit protection, relays, and optional automatic water-level sensors.',
        detail: 'Testing current draw (amperes) to verify normal load.'
      },
      {
        step: '05',
        title: 'Discharge Testing & Handover',
        description: 'Continuous run test to verify water pressure, flow clarity, and electrical stability before handover to the customer.',
        detail: 'Customer briefed on starter operation and basic maintenance tips.'
      }
    ],

    technicalGuide: {
      title: 'Crucial Facts on Submersible Motors',
      subtitle: 'Avoid Common Installation Errors and Motor Failures',
      items: [
        {
          heading: 'Why Depth Matching Matters',
          content: 'Placing the pump too deep near the bottom can cause it to suck in mud and silt, leading to impeller wear. Placing it too high risks the water level dropping below intake during dry seasons. Proper positioning requires calculating the drawdown level.'
        },
        {
          heading: 'Protection Against Voltage Variations',
          content: 'Power fluctuations are common in growing suburban areas. We always recommend digital starter panels with built-in high/low voltage cutoffs to prevent motor winding burnouts.'
        },
        {
          heading: 'Column Pipe Strength',
          content: 'The weight of the pump, motor, and vertical column of water creates tremendous tension. Using certified high-tensile column pipes prevents pipe breakage inside the well.'
        },
        {
          heading: 'Periodic Maintenance',
          content: 'Checking starter contactors, capacitor health, and operating current once a year prevents sudden water outages.'
        }
      ]
    },

    gallery: [
      { url: '/services/installationandfitting.png', alt: 'Technician fitting submersible pump connections', caption: 'Precision assembly of pump column pipe and submersible cable' },
      { url: '/services/controlpanel.png', alt: 'Electrical control starter panel', caption: 'High-grade starter panels with digital overload protection' },
      { url: '/gallery/533b520a-9f5c-47e5-b7d0-1293ce3ff5ef.jpg', alt: 'Machinery inspection on site', caption: 'Field checks for electrical and mechanical performance' },
      { url: '/services/services-repairs.png', alt: 'Motor servicing tools', caption: 'Dedicated service toolkit for rapid on-site troubleshooting' }
    ],

    faqs: [
      {
        question: 'What horsepower (HP) motor do I need for my borewell?',
        answer: 'Motor horsepower depends on total borewell depth, the height of your overhead tank, and required water flow. For depths up to 150-200 feet, a 1 HP to 1.5 HP motor is usually sufficient; deeper wells (300+ feet) typically require 2 HP to 3 HP or higher.'
      },
      {
        question: 'What should I do if my motor starts tripping the circuit breaker?',
        answer: 'Tripping is usually caused by low voltage, worn starter capacitors, or pump impeller jamming due to sand accumulation. Turn off the main switch and call us at 092466 22995 for immediate on-site inspection.'
      },
      {
        question: 'Can you pull out a motor that is stuck inside an older borewell?',
        answer: 'Yes. We use specialized motor pulling gear, tripods, and winches to safely retrieve stuck pumps without snapping the column pipes.'
      },
      {
        question: 'Do you supply automatic water level controllers?',
        answer: 'Yes, we can integrate auto-cut sensors so your motor automatically turns on when the overhead tank is low and stops when full, protecting against dry run.'
      }
    ],

    ctaContext: 'Hello Koneti Borewells & Motors, I need assistance with Water Pump & Motor supply / fitting / repair in Visakhapatnam.',
    relatedSlugs: ['borewell-drilling', 'borewell-cleaning-maintenance', 'groundwater-survey'],

    seo: {
      title: 'Water Pump & Motor Solutions in Visakhapatnam | Koneti Borewells',
      description: 'Quality submersible pumps, starter panels, lowering and motor repair across Visakhapatnam. 24/7 service. Call Koneti Borewells at 092466 22995.',
      canonical: 'https://www.konetiborewellsvizag.com/services/pump-motor-solutions'
    }
  },

  {
    slug: 'borewell-cleaning-maintenance',
    title: 'Borewell Cleaning, Flushing & Maintenance',
    shortTitle: 'Borewell Cleaning',
    category: 'Restoration & Servicing',
    badge: 'Restoration',
    featured: false,
    thumbnail: '/services/borewelldeve3lopment.png',
    featuredImage: '/services/services-repairs.png',
    sideImage: '/services/casingpipework.png',
    tagline: 'High-pressure air compressor flushing, silt removal, and bore rejuvenation for low-yield wells.',

    hero: {
      eyebrow: 'BOREWELL RESTORATION & FLUSHING',
      h1: 'Borewell Cleaning & Flushing in Visakhapatnam',
      statement: 'Rejuvenate Clogged Wells and Restore Clean Groundwater Flow.',
      description: 'Over time, borewells accumulate mud, sand, and fine rock debris that choke water veins. Our high-pressure air flushing clears sediment deposits and restores well capacity.',
      image: '/services/borewelldeve3lopment.png',
      alt: 'Borewell cleaning and high-pressure compressor flushing operation',
      badgeText: 'Restores Yield & Water Clarity'
    },

    quickFacts: [
      { label: 'Technology', value: 'High-Pressure Air Compressor Flushing', icon: 'Wind' },
      { label: 'Target Issues', value: 'Silt, Mud, Reduced Water Flow & Odor', icon: 'AlertCircle' },
      { label: 'Depth Range', value: 'Up to 600+ Feet Cleaning', icon: 'Maximize2' },
      { label: 'Time Required', value: 'Typically 3 to 6 Hours', icon: 'Clock' },
      { label: 'Safety Check', value: 'Casing Pipe & Silt Level Audit', icon: 'ShieldCheck' },
      { label: 'Coverage', value: 'All Areas of Visakhapatnam', icon: 'MapPin' }
    ],

    overview: {
      h2: 'Why Periodic Flushing Extends Your Borewell Life',
      lead: 'A sudden drop in borewell output is frequently not due to groundwater depletion, but rather silt choking the borehole intake fissures.',
      paragraphs: [
        'Fine silt and mineral sediments naturally settle at the bottom of borewells over years of operation. If left untreated, this sediment rises to the level of the motor suction, causing severe sand abrasion, overheating, and eventual motor failure.',
        'Koneti Borewells & Motors utilizes industrial high-pressure air compressors to send intense bursts of air deep down the borehole. This aerates and lifts years of accumulated sediment, mud slurry, and organic debris out of the well.',
        'Flushing also reopens blocked microscopic rock fissures through which groundwater enters, revitalizing discharge rates and ensuring clean, drinkable water returns to your home or facility.'
      ]
    },

    highlights: [
      {
        number: '01',
        title: 'Deep Air-Flushing Action',
        description: 'High-CFM compressor blasts dislodge heavy silt cakes and sand beds from the deepest sections of the borehole.',
        icon: 'Wind'
      },
      {
        number: '02',
        title: 'Prevents Motor Burnouts',
        description: 'Removing sand and silt protects expensive pump impellers from abrasive wear and electrical failure.',
        icon: 'ShieldCheck'
      },
      {
        number: '03',
        title: 'Restores Clear Water',
        description: 'Eliminates cloudy, reddish, or muddy water by purging stagnant sediment and organic buildup.',
        icon: 'Droplet'
      },
      {
        number: '04',
        title: 'Fast On-Site Turnaround',
        description: 'Complete flushing and re-commissioning carried out within hours with zero disturbance to your structure.',
        icon: 'Clock'
      }
    ],

    applications: [
      {
        title: 'Older Residential Wells',
        tag: 'Domestic Rejuvenation',
        description: 'Restores clear water flow for borewells drilled 5 to 15+ years ago that have experienced gradual yield decline.',
        image: '/services/borewelldeve3lopment.png'
      },
      {
        title: 'Post-Monsoon Turbidity',
        tag: 'Muddy Water Clearing',
        description: 'Flushes out surface run-off sediments and discolored groundwater following intense cyclonic or monsoon downpours in Vizag.',
        image: '/gallery/d59404eb-9100-4510-8f7e-8594d7c16b96.jpg'
      },
      {
        title: 'Farm Wells Prior to Planting',
        tag: 'Irrigation Readiness',
        description: 'Annual servicing of agricultural borewells before peak seasonal irrigation to ensure maximum uninterrupted water delivery.',
        image: '/gallery/8eebdfbf-b47a-4ea1-b243-c71452559b80.jpg'
      },
      {
        title: 'Commercial Sump & Bore Recovery',
        tag: 'Commercial Facilities',
        description: 'Restores vital water supply for apartments and hotels experiencing sand intake in overhead storage.',
        image: '/services/casingpipework.png'
      }
    ],

    process: [
      {
        step: '01',
        title: 'Motor Retrieval & Well Inspection',
        description: 'The existing submersible motor is safely pulled out, and sounding lines measure the depth of sediment accumulation.',
        detail: 'Verifies whether casing is cracked or intact.'
      },
      {
        step: '02',
        title: 'Compressor Line Lowering',
        description: 'Heavy-duty airline and delivery pipes are lowered to the very bottom of the borehole.',
        detail: 'Positioned right into the mud layer for direct expulsion.'
      },
      {
        step: '03',
        title: 'High-Pressure Air Injection',
        description: 'High-pressure compressed air creates extreme agitation, lifting muddy slurry and rock particles to the surface.',
        detail: 'Discharge routed safely away from walls and gardens.'
      },
      {
        step: '04',
        title: 'Vein Reopening & Clean Flush',
        description: 'Air flushing continues until the discharge turns crystal clear and natural underground flow resumes freely.',
        detail: 'Monitors time taken for water level to recover.'
      },
      {
        step: '05',
        title: 'Pump Reinstallation & Testing',
        description: 'Submersible motor is cleaned, inspected, and lowered back to optimal operating depth above the clean well bed.',
        detail: 'Final current check and water sample verification.'
      }
    ],

    technicalGuide: {
      title: 'Signs Your Borewell Needs Cleaning',
      subtitle: 'Identify Early Symptoms to Avoid Emergency Outages',
      items: [
        {
          heading: 'Water Turning Muddy or Sandy',
          content: 'If tap water suddenly has fine sand grains or yellow/brown tint, the sediment bed inside the borehole has risen above pump level.'
        },
        {
          heading: 'Motor Sucking Air or Running Dry Faster',
          content: 'When sediment chokes groundwater entry pores, the borehole empties quicker than normal, causing the pump to run dry.'
        },
        {
          heading: 'Unusual Motor Noise or Overheating',
          content: 'Sand particles passing through impellers create friction, increasing electricity consumption and causing starter overload trips.'
        },
        {
          heading: 'Idle Well Revival',
          content: 'A borewell left unused for several months or years should always be thoroughly air-flushed before lowering a new motor.'
        }
      ]
    },

    gallery: [
      { url: '/services/borewelldeve3lopment.png', alt: 'Air flushing compressor equipment', caption: 'High-CFM compressor unit clearing sediment from deep borehole' },
      { url: '/gallery/d59404eb-9100-4510-8f7e-8594d7c16b96.jpg', alt: 'Clean water strike after flushing', caption: 'Crystal clear water stream discharging freely after flushing' },
      { url: '/services/casingpipework.png', alt: 'Casing and pipe check', caption: 'Wellhead alignment and casing clearance verification' },
      { url: '/services/services-repairs.png', alt: 'Maintenance equipment', caption: 'Field tooling for quick motor inspection and reinstallation' }
    ],

    faqs: [
      {
        question: 'How often should a borewell be cleaned or flushed?',
        answer: 'In general, a borewell in Visakhapatnam should be inspected and flushed every 3 to 5 years, or whenever you notice sand particles in your overhead tank or a noticeable drop in yield.'
      },
      {
        question: 'Will flushing guarantee more water in my well?',
        answer: 'If the reduced water flow was caused by silt accumulation or blocked fissures, flushing will significantly improve yield. However, if the regional water table has dropped drastically across the entire colony, yield is limited by natural aquifer levels.'
      },
      {
        question: 'How long does the entire cleaning process take?',
        answer: 'Usually between 3 to 6 hours from motor retrieval to full reinstallation and clear water testing.'
      },
      {
        question: 'Can you clean borewells located inside garages or narrow corridors?',
        answer: 'Yes! We use flexible high-pressure airline hoses that can reach interior borewells even when the compressor vehicle is parked on the street.'
      }
    ],

    ctaContext: 'Hello Koneti Borewells & Motors, I would like to request Borewell Cleaning / Flushing service in Visakhapatnam.',
    relatedSlugs: ['borewell-drilling', 'pump-motor-solutions', 'groundwater-survey'],

    seo: {
      title: 'Borewell Cleaning & Flushing in Visakhapatnam | Koneti Borewells',
      description: 'High-pressure borewell cleaning, mud removal and flushing services across Visakhapatnam. Restore water yield. 24/7 service. Call 092466 22995.',
      canonical: 'https://www.konetiborewellsvizag.com/services/borewell-cleaning-maintenance'
    }
  },

  {
    slug: 'groundwater-survey',
    title: 'Groundwater Survey & Borewell Siting',
    shortTitle: 'Groundwater Survey',
    category: 'Scientific Siting',
    badge: 'Hydrogeological',
    featured: false,
    thumbnail: '/services/borewellpoint.png',
    featuredImage: '/services/consultation.png',
    sideImage: '/services/watertesting.png',
    tagline: 'Scientific hydrogeological assessment, groundwater point identification & site feasibility.',

    hero: {
      eyebrow: 'HYDROGEOLOGICAL ASSESSMENT',
      h1: 'Groundwater Survey & Borewell Siting in Visakhapatnam',
      statement: 'Identify the Most Promising Water-Bearing Points on Your Property.',
      description: 'Scientific site assessment to locate geological fractures and aquifer paths, minimizing dry-well risks before deploying heavy drilling machinery.',
      image: '/services/borewellpoint.png',
      alt: 'Groundwater point identification and borewell siting consultation',
      badgeText: 'Minimizes Dry Well Risk'
    },

    quickFacts: [
      { label: 'Methodology', value: 'Geological Strata & Resistivity Survey', icon: 'Compass' },
      { label: 'Scope', value: 'Residential, Farm & Commercial Plots', icon: 'Map' },
      { label: 'Site Feasibility', value: 'Rig Access & Clearance Audit', icon: 'CheckCircle' },
      { label: 'Deliverable', value: 'Exact Point Marking & Depth Estimate', icon: 'MapPin' },
      { label: 'Turnaround', value: 'Prior to Rig Mobilization', icon: 'Calendar' },
      { label: 'Region', value: 'Visakhapatnam & Rural Districts', icon: 'Navigation' }
    ],

    overview: {
      h2: 'Scientific Assessment Before You Drill',
      lead: 'Drilling blindly without understanding underground rock fractures increases the probability of hitting dry formation or inadequate yield.',
      paragraphs: [
        'Visakhapatnam’s topography is characterized by Eastern Ghats charnockite and granite hills transitioning into coastal sands. Subterranean water flows through structural fault lines, fracture planes, and weathered pegmatite zones.',
        'At Koneti Borewells & Motors, we help property owners identify the optimal drilling point on their plot by studying regional water tables, surrounding borewell history, and surface geological markers.',
        'This pre-drilling assessment ensures you do not waste resources drilling in unproductive corners of your property and confirms that the heavy drilling rig can safely access the selected location.'
      ]
    },

    highlights: [
      {
        number: '01',
        title: 'Fracture Zone Identification',
        description: 'Pinpoints underground fault lines and jointed rock where subterranean water concentrates.',
        icon: 'Target'
      },
      {
        number: '02',
        title: 'Rig Maneuverability Check',
        description: 'Verifies turning radius, compound wall clearance, and overhead lines before booking drilling machinery.',
        icon: 'Truck'
      },
      {
        number: '03',
        title: 'Depth & Caliber Guidance',
        description: 'Provides preliminary guidance on expected drilling depth (e.g. 200 ft vs 450 ft) based on local geology.',
        icon: 'Layers'
      },
      {
        number: '04',
        title: 'Neighbourhood Yield Context',
        description: 'Leverages decades of practical drilling familiarity across Seethammadara, Madhurawada, and surrounding zones.',
        icon: 'FileText'
      }
    ],

    applications: [
      {
        title: 'New Plot Constructions',
        tag: 'Pre-Construction Siting',
        description: 'Locates borewell point before building foundations and boundary walls are erected, maximizing rig freedom.',
        image: '/services/consultation.png'
      },
      {
        title: 'Large Agricultural Parcels',
        tag: 'Acreage Point Marking',
        description: 'Surveys multi-acre farmlands to select points with highest recharge potential for long-term farm irrigation.',
        image: '/gallery/5a746f4f-166d-4cab-9a4d-0d20b06ea7f1.jpg'
      },
      {
        title: 'Commercial Developments',
        tag: 'High-Demand Siting',
        description: 'Evaluates commercial layouts to locate secondary or backup borewells ensuring round-the-clock water reliability.',
        image: '/services/watertesting.png'
      },
      {
        title: 'Troubled Dry-Well Sites',
        tag: 'Second-Opinion Assessment',
        description: 'Assesses failed or low-yield properties to determine if an alternative corner offers promising fracture lines.',
        image: '/services/borewellpoint.png'
      }
    ],

    process: [
      {
        step: '01',
        title: 'Site Visit & Topography Inspection',
        description: 'We visit your property to study surface slopes, drainage patterns, and proximity to natural recharge sources.',
        detail: 'Examines existing well performance in adjacent properties.'
      },
      {
        step: '02',
        title: 'Geological & Strata Correlation',
        description: 'Correlation of subsurface rock characteristics with known regional geological trends across Visakhapatnam.',
        detail: 'Evaluates hard rock depth versus sandy coastal overburden.'
      },
      {
        step: '03',
        title: 'Rig Access & Safety Audit',
        description: 'Checking gate widths, overhead electrical lines, septic tank locations, and foundation clearances.',
        detail: 'Ensures drilling vehicle can position and stabilize without property hazard.'
      },
      {
        step: '04',
        title: 'Exact Point Marking',
        description: 'The optimal drilling spot is clearly marked on the ground with paint and pegs.',
        detail: 'Clear coordination for builder, architect, or property owner.'
      },
      {
        step: '05',
        title: 'Execution Recommendation',
        description: 'We provide recommended diameter (4½" vs 6½"), estimated depth bracket, and expected casing requirement.',
        detail: 'Enables an accurate, transparent cost estimate.'
      }
    ],

    technicalGuide: {
      title: 'Practical Guidelines for Borewell Placement',
      subtitle: 'Where on Your Land Should You Drill?',
      items: [
        {
          heading: 'Distance from Septic Tanks & Soak Pits',
          content: 'To safeguard drinking water purity, a borewell should be located at a safe horizontal distance (minimum 30 to 50 feet where possible) from sewage tanks or drainage sumps.'
        },
        {
          heading: 'Boundary & Foundation Clearances',
          content: 'Drilling directly against a building foundation can risk structural vibrations. Maintaining a safe distance from load-bearing columns ensures structural safety.'
        },
        {
          heading: 'Access for Future Maintenance',
          content: 'Never build a permanent concrete roof or sealed room directly over your borewell head. You will need vertical clearance in the future for motor servicing and compressor flushing.'
        },
        {
          heading: 'Seasonal Variations',
          content: 'Water tables peak after monsoon rains and reach their lowest in May/June. Scientific siting factors in dry-season groundwater behavior.'
        }
      ]
    },

    gallery: [
      { url: '/services/borewellpoint.png', alt: 'Groundwater point marking', caption: 'Precise on-site marking of optimal borewell coordinates' },
      { url: '/services/consultation.png', alt: 'Site consultation with property owner', caption: 'Direct discussion regarding site layout and access pathway' },
      { url: '/services/watertesting.png', alt: 'Water testing and observation', caption: 'Water quality and clarity inspection' },
      { url: '/borewell-sideview.png', alt: 'Drilling machinery on site', caption: 'Positioning rig exactly above marked point' }
    ],

    faqs: [
      {
        question: 'Can groundwater surveys guarantee 100% water strike?',
        answer: 'No survey method in the world can offer a 100% guarantee because subterranean fissure networks are natural geological phenomena. However, scientific assessment significantly raises your probability of success compared to arbitrary drilling.'
      },
      {
        question: 'When should I conduct a groundwater survey?',
        answer: 'Ideally before you pour building foundations or construct boundary walls. This provides complete freedom to mark the best point and allows easy access for the drilling rig.'
      },
      {
        question: 'How far should my borewell be from a neighbor’s well?',
        answer: 'A minimum distance of 50 to 100 feet is advisable to avoid cone of depression interference where one pump steals yield from another.'
      },
      {
        question: 'How do I book a site inspection with Koneti Borewells & Motors?',
        answer: 'Call our team directly at 092466 22995 or send a WhatsApp message with your plot location in Visakhapatnam.'
      }
    ],

    ctaContext: 'Hello Koneti Borewells & Motors, I would like to arrange a Groundwater Survey / Borewell Siting consultation in Visakhapatnam.',
    relatedSlugs: ['borewell-drilling', 'pump-motor-solutions', 'borewell-cleaning-maintenance'],

    seo: {
      title: 'Groundwater Survey & Borewell Siting Vizag | Koneti Borewells',
      description: 'Scientific borewell siting and groundwater assessment in Visakhapatnam. Minimize dry-well risk with experienced site evaluation. Call 092466 22995.',
      canonical: 'https://www.konetiborewellsvizag.com/services/groundwater-survey'
    }
  }
];

export const getServiceBySlug = (slug) => {
  return services.find((s) => s.slug === slug);
};

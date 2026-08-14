export const brands = [
  {
    id: "brand_ihna",
    name: "Institute of Health and Nursing Australia",
    shortName: "IHNA",
    slug: "ihna",
    logo: null,
    status: "active"
  },

  {
    id: "brand_ihm",
    name: "Institute of Health & Management",
    shortName: "IHM",
    slug: "ihm",
    logo: null,
    status: "active"
  }
];

export const categories = [
  {
    id: "cat_clothing",
    name: "Clothing",
    slug: "clothing",
    parentId: null,
    level: 0,
    status: "active"
  },

  {
    id: "cat_scrubs",
    name: "Scrubs",
    slug: "scrubs",
    parentId: "cat_clothing",
    level: 1,
    status: "active"
  },

  {
    id: "cat_womens_scrubs",
    name: "Women's Scrubs",
    slug: "womens-scrubs",
    parentId: "cat_scrubs",
    level: 2,
    status: "active"
  },

  {
    id: "cat_womens_scrub_tops",
    name: "Women's Scrub Tops",
    slug: "womens-scrub-tops",
    parentId: "cat_womens_scrubs",
    level: 3,
    status: "active"
  },

  {
    id: "cat_womens_scrub_pants",
    name: "Women's Scrub Pants",
    slug: "womens-scrub-pants",
    parentId: "cat_womens_scrubs",
    level: 3,
    status: "active"
  },

  {
    id: "cat_mens_scrubs",
    name: "Men's Scrubs",
    slug: "mens-scrubs",
    parentId: "cat_scrubs",
    level: 2,
    status: "active"
  },

  {
    id: "cat_mens_scrub_tops",
    name: "Men's Scrub Tops",
    slug: "mens-scrub-tops",
    parentId: "cat_mens_scrubs",
    level: 3,
    status: "active"
  },

  {
    id: "cat_mens_scrub_pants",
    name: "Men's Scrub Pants",
    slug: "mens-scrub-pants",
    parentId: "cat_mens_scrubs",
    level: 3,
    status: "active"
  },

  // ─────────────────────────────
  // POLOS
  // ─────────────────────────────

  {
    id: "cat_polos",
    name: "Polos",
    slug: "polos",
    parentId: "cat_clothing",
    level: 1,
    status: "active"
  },

  {
    id: "cat_performance_polos",
    name: "Performance Polos",
    slug: "performance-polos",
    parentId: "cat_polos",
    level: 2,
    status: "active"
  }
];

export const products = [
  {
    id: "prod_ihna_womens_scrub_top",

    sku: "IHNA-WOMENS-SCRUB-TOP",

    name: "IHNA Student Women's Scrubs Top",

    slug: "ihna-womens-scrubs-top",

    productType: "physical",

    brandId: "brand_ihna",

    categoryId: "cat_womens_scrub_tops",

    description: {
      short:
        "IHNA student women's scrubs top designed for healthcare students.",

      long:
        "Professional women's scrubs top for Institute of Health and Nursing Australia students."
    },

    pricing: {
      currency: "AUD",
      price: 36.3,
      compareAtPrice: null
    },

    media: {
      images: [],
      videos: []
    },

    options: [
      {
        id: "option_size",
        name: "Size",
        type: "select",
        values: [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],

    variants: [],

    attributes: {
      gender: "women",
      ageGroup: "adult",
      productType: "scrub_top",
      material: null,
      fit: null,
      color: null
    },

    specifications: {
      garmentType: "scrub_top",
      usage: "healthcare",
      institution: "IHNA"
    },

    customization: {
      enabled: false,
      fields: []
    },

    inventory: {
      trackInventory: true,
      stockStatus: "in_stock",
      quantity: 100
    },

    shipping: {
      requiresShipping: true,
      weight: null,
      dimensions: null
    },

    tags: [
      "IHNA",
      "scrubs",
      "womens-scrubs",
      "student-uniform"
    ],

    status: "active",
    visibility: "public"
  },


  // ─────────────────────────────
  // IHNA WOMEN'S SCRUB PANTS
  // ─────────────────────────────

  {
    id: "prod_ihna_womens_scrub_pants",

    sku: "IHNA-WOMENS-SCRUB-PANTS",

    name: "IHNA Student Women's Scrubs Performance Pants",

    slug: "ihna-womens-scrubs-performance-pants",

    productType: "physical",

    brandId: "brand_ihna",

    categoryId: "cat_womens_scrub_pants",

    description: {
      short:
        "IHNA student women's performance scrub pants.",

      long:
        "Professional women's performance scrub pants for Institute of Health and Nursing Australia students."
    },

    pricing: {
      currency: "AUD",
      price: 36.3,
      compareAtPrice: null
    },

    media: {
      images: [],
      videos: []
    },

    options: [
      {
        id: "option_size",
        name: "Size",
        type: "select",
        values: [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],

    variants: [],

    attributes: {
      gender: "women",
      ageGroup: "adult",
      productType: "scrub_pants",
      material: null,
      fit: null,
      color: null
    },

    specifications: {
      garmentType: "scrub_pants",
      usage: "healthcare",
      performance: true,
      institution: "IHNA"
    },

    customization: {
      enabled: false,
      fields: []
    },

    inventory: {
      trackInventory: true,
      stockStatus: "in_stock",
      quantity: 100
    },

    shipping: {
      requiresShipping: true
    },

    tags: [
      "IHNA",
      "scrubs",
      "womens-scrubs",
      "student-uniform"
    ],

    status: "active",
    visibility: "public"
  },


  // ─────────────────────────────
  // IHNA MEN'S SCRUB TOP
  // ─────────────────────────────

  {
    id: "prod_ihna_mens_scrub_top",

    sku: "IHNA-MENS-SCRUB-TOP",

    name: "IHNA Student Men's Scrubs Top",

    slug: "ihna-mens-scrubs-top",

    productType: "physical",

    brandId: "brand_ihna",

    categoryId: "cat_mens_scrub_tops",

    description: {
      short:
        "IHNA student men's scrubs top.",

      long:
        "Professional men's scrubs top for Institute of Health and Nursing Australia students."
    },

    pricing: {
      currency: "AUD",
      price: 36.3,
      compareAtPrice: null
    },

    media: {
      images: [],
      videos: []
    },

    options: [
      {
        id: "option_size",
        name: "Size",
        type: "select",
        values: [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],

    variants: [],

    attributes: {
      gender: "men",
      ageGroup: "adult",
      productType: "scrub_top"
    },

    specifications: {
      garmentType: "scrub_top",
      usage: "healthcare",
      institution: "IHNA"
    },

    customization: {
      enabled: false,
      fields: []
    },

    inventory: {
      trackInventory: true,
      stockStatus: "in_stock",
      quantity: 100
    },

    shipping: {
      requiresShipping: true
    },

    tags: [
      "IHNA",
      "scrubs",
      "mens-scrubs",
      "student-uniform"
    ],

    status: "active",
    visibility: "public"
  },


  // ─────────────────────────────
  // IHNA MEN'S SCRUB PANTS
  // ─────────────────────────────

  {
    id: "prod_ihna_mens_scrub_pants",

    sku: "IHNA-MENS-SCRUB-PANTS",

    name: "IHNA Student Men's Scrubs Performance Pants",

    slug: "ihna-mens-scrubs-performance-pants",

    productType: "physical",

    brandId: "brand_ihna",

    categoryId: "cat_mens_scrub_pants",

    description: {
      short:
        "IHNA student men's performance scrub pants.",

      long:
        "Professional men's performance scrub pants for Institute of Health and Nursing Australia students."
    },

    pricing: {
      currency: "AUD",
      price: 36.3,
      compareAtPrice: null
    },

    media: {
      images: [],
      videos: []
    },

    options: [
      {
        id: "option_size",
        name: "Size",
        type: "select",
        values: [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],

    variants: [],

    attributes: {
      gender: "men",
      ageGroup: "adult",
      productType: "scrub_pants"
    },

    specifications: {
      garmentType: "scrub_pants",
      usage: "healthcare",
      performance: true,
      institution: "IHNA"
    },

    customization: {
      enabled: false,
      fields: []
    },

    inventory: {
      trackInventory: true,
      stockStatus: "in_stock",
      quantity: 100
    },

    shipping: {
      requiresShipping: true
    },

    tags: [
      "IHNA",
      "scrubs",
      "mens-scrubs",
      "student-uniform"
    ],

    status: "active",
    visibility: "public"
  },


  // ─────────────────────────────
  // IHNA POLO
  // ─────────────────────────────

  {
    id: "prod_ihna_unisex_polo",

    sku: "IHNA-UNISEX-PERFORMANCE-POLO",

    name: "IHNA Student Unisex Performance Polo",

    slug: "ihna-unisex-performance-polo",

    productType: "physical",

    brandId: "brand_ihna",

    categoryId: "cat_performance_polos",

    description: {
      short:
        "IHNA student unisex performance polo.",

      long:
        "Unisex performance polo designed for Institute of Health and Nursing Australia students."
    },

    pricing: {
      currency: "AUD",
      price: 36.3,
      compareAtPrice: null
    },

    media: {
      images: [],
      videos: []
    },

    options: [
      {
        id: "option_size",
        name: "Size",
        type: "select",
        values: [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],

    variants: [],

    attributes: {
      gender: "unisex",
      ageGroup: "adult",
      productType: "polo"
    },

    specifications: {
      garmentType: "performance_polo",
      usage: "student_uniform",
      institution: "IHNA"
    },

    customization: {
      enabled: false,
      fields: []
    },

    inventory: {
      trackInventory: true,
      stockStatus: "in_stock",
      quantity: 100
    },

    shipping: {
      requiresShipping: true
    },

    tags: [
      "IHNA",
      "polo",
      "performance",
      "student-uniform"
    ],

    status: "active",
    visibility: "public"
  },


  // ─────────────────────────────
  // IHM WOMEN'S SCRUB TOP
  // ─────────────────────────────

  // {
  //   id: "prod_ihm_womens_scrub_top",

  //   sku: "IHM-WOMENS-SCRUB-TOP",

  //   name: "IHM Student Women's Scrubs Top",

  //   slug: "ihm-womens-scrubs-top",

  //   productType: "physical",

  //   brandId: "brand_ihm",

  //   categoryId: "cat_womens_scrub_tops",

  //   description: {
  //     short:
  //       "IHM student women's scrubs top.",

  //     long:
  //       "Professional women's scrubs top for Institute of Health & Management students."
  //   },

  //   pricing: {
  //     currency: "AUD",
  //     price: 33.0,
  //     compareAtPrice: null
  //   },

  //   media: {
  //     images: [],
  //     videos: []
  //   },

  //   options: [
  //     {
  //       id: "option_size",
  //       name: "Size",
  //       type: "select",
  //       values: [
  //         "XS",
  //         "S",
  //         "M",
  //         "L",
  //         "XL",
  //         "2XL"
  //       ]
  //     }
  //   ],

  //   variants: [],

  //   attributes: {
  //     gender: "women",
  //     ageGroup: "adult",
  //     productType: "scrub_top"
  //   },

  //   specifications: {
  //     garmentType: "scrub_top",
  //     usage: "healthcare",
  //     institution: "IHM"
  //   },

  //   customization: {
  //     enabled: false,
  //     fields: []
  //   },

  //   inventory: {
  //     trackInventory: true,
  //     stockStatus: "in_stock",
  //     quantity: 100
  //   },

  //   shipping: {
  //     requiresShipping: true
  //   },

  //   tags: [
  //     "IHM",
  //     "scrubs",
  //     "womens-scrubs",
  //     "student-uniform"
  //   ],

  //   status: "active",
  //   visibility: "public"
  // },


  // ─────────────────────────────
  // IHM WOMEN'S SCRUB PANTS
  // ─────────────────────────────

  // {
  //   id: "prod_ihm_womens_scrub_pants",

  //   sku: "IHM-WOMENS-SCRUB-PANTS",

  //   name: "IHM Student Women's Scrubs Performance Pants",

  //   slug: "ihm-womens-scrubs-performance-pants",

  //   productType: "physical",

  //   brandId: "brand_ihm",

  //   categoryId: "cat_womens_scrub_pants",

  //   description: {
  //     short:
  //       "IHM student women's performance scrub pants.",

  //     long:
  //       "Professional women's performance scrub pants for Institute of Health & Management students."
  //   },

  //   pricing: {
  //     currency: "AUD",
  //     price: 33.0,
  //     compareAtPrice: null
  //   },

  //   media: {
  //     images: [],
  //     videos: []
  //   },

  //   options: [
  //     {
  //       id: "option_size",
  //       name: "Size",
  //       type: "select",
  //       values: [
  //         "XS",
  //         "S",
  //         "M",
  //         "L",
  //         "XL",
  //         "2XL"
  //       ]
  //     }
  //   ],

  //   variants: [],

  //   attributes: {
  //     gender: "women",
  //     ageGroup: "adult",
  //     productType: "scrub_pants"
  //   },

  //   specifications: {
  //     garmentType: "scrub_pants",
  //     usage: "healthcare",
  //     performance: true,
  //     institution: "IHM"
  //   },

  //   customization: {
  //     enabled: false,
  //     fields: []
  //   },

  //   inventory: {
  //     trackInventory: true,
  //     stockStatus: "in_stock",
  //     quantity: 100
  //   },

  //   shipping: {
  //     requiresShipping: true
  //   },

  //   tags: [
  //     "IHM",
  //     "scrubs",
  //     "womens-scrubs",
  //     "student-uniform"
  //   ],

  //   status: "active",
  //   visibility: "public"
  // },


  // ─────────────────────────────
  // IHM MEN'S SCRUB TOP
  // ─────────────────────────────

  // {
  //   id: "prod_ihm_mens_scrub_top",

  //   sku: "IHM-MENS-SCRUB-TOP",

  //   name: "IHM Student Men's Scrubs Top",

  //   slug: "ihm-mens-scrubs-top",

  //   productType: "physical",

  //   brandId: "brand_ihm",

  //   categoryId: "cat_mens_scrub_tops",

  //   description: {
  //     short:
  //       "IHM student men's scrubs top.",

  //     long:
  //       "Professional men's scrubs top for Institute of Health & Management students."
  //   },

  //   pricing: {
  //     currency: "AUD",
  //     price: 33.0,
  //     compareAtPrice: null
  //   },

  //   media: {
  //     images: [],
  //     videos: []
  //   },

  //   options: [
  //     {
  //       id: "option_size",
  //       name: "Size",
  //       type: "select",
  //       values: [
  //         "XS",
  //         "S",
  //         "M",
  //         "L",
  //         "XL",
  //         "2XL"
  //       ]
  //     }
  //   ],

  //   variants: [],

  //   attributes: {
  //     gender: "men",
  //     ageGroup: "adult",
  //     productType: "scrub_top"
  //   },

  //   specifications: {
  //     garmentType: "scrub_top",
  //     usage: "healthcare",
  //     institution: "IHM"
  //   },

  //   customization: {
  //     enabled: false,
  //     fields: []
  //   },

  //   inventory: {
  //     trackInventory: true,
  //     stockStatus: "in_stock",
  //     quantity: 100
  //   },

  //   shipping: {
  //     requiresShipping: true
  //   },

  //   tags: [
  //     "IHM",
  //     "scrubs",
  //     "mens-scrubs",
  //     "student-uniform"
  //   ],

  //   status: "active",
  //   visibility: "public"
  // },


  // ─────────────────────────────
  // IHM MEN'S SCRUB PANTS
  // ─────────────────────────────

  // {
  //   id: "prod_ihm_mens_scrub_pants",

  //   sku: "IHM-MENS-SCRUB-PANTS",

  //   name: "IHM Student Men's Scrubs Performance Pants",

  //   slug: "ihm-mens-scrubs-performance-pants",

  //   productType: "physical",

  //   brandId: "brand_ihm",

  //   categoryId: "cat_mens_scrub_pants",

  //   description: {
  //     short:
  //       "IHM student men's performance scrub pants.",

  //     long:
  //       "Professional men's performance scrub pants for Institute of Health & Management students."
  //   },

  //   pricing: {
  //     currency: "AUD",
  //     price: 33.0,
  //     compareAtPrice: null
  //   },

  //   media: {
  //     images: [],
  //     videos: []
  //   },

  //   options: [
  //     {
  //       id: "option_size",
  //       name: "Size",
  //       type: "select",
  //       values: [
  //         "XS",
  //         "S",
  //         "M",
  //         "L",
  //         "XL",
  //         "2XL"
  //       ]
  //     }
  //   ],

  //   variants: [],

  //   attributes: {
  //     gender: "men",
  //     ageGroup: "adult",
  //     productType: "scrub_pants"
  //   },

  //   specifications: {
  //     garmentType: "scrub_pants",
  //     usage: "healthcare",
  //     performance: true,
  //     institution: "IHM"
  //   },

  //   customization: {
  //     enabled: false,
  //     fields: []
  //   },

  //   inventory: {
  //     trackInventory: true,
  //     stockStatus: "in_stock",
  //     quantity: 100
  //   },

  //   shipping: {
  //     requiresShipping: true
  //   },

  //   tags: [
  //     "IHM",
  //     "scrubs",
  //     "mens-scrubs",
  //     "student-uniform"
  //   ],

  //   status: "active",
  //   visibility: "public"
  // }
];

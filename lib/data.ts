export const IMG = {
  logoDark: "/images/logo-dark.png",
  logoLight: "/images/logo-light.png",
  mark: "/images/mark.png",
  hero: "/images/hero.jpg",
  idea: "/images/idea.jpg",
  philosophy: "/images/philosophy.jpg",
  villaWarm: "/images/idea.jpg",
  community: "/images/community.jpg",
  towers: "/images/towers.jpg",
  stone: "/images/stone.jpg",
  interior: "/images/interior.jpg",
  facade: "/images/facade.jpg",
  living: "/images/living.jpg",
} as const;

export type Principle = { k: string; n: string; name: string; body: string };

export const PRINCIPLES: Principle[] = [
  { k: "light", n: "01", name: "Light", body: "Every habitable room gets a direct exterior wall. Apertures are sized for the sun path at this latitude, not for the elevation drawing." },
  { k: "air", n: "02", name: "Air", body: "Cross-ventilation on opposing walls, so a home stays comfortable for most of the year with the air conditioning off." },
  { k: "space", n: "03", name: "Space", body: "Volume where people gather, restraint where they pass through. Circulation is held to a minimum of the carpet area." },
  { k: "mat", n: "04", name: "Materials", body: "An envelope specified for this climate: thermal mass, weathering behaviour, and finishes that age rather than degrade." },
  { k: "nature", n: "05", name: "Nature", body: "Planting placed where it does work — shading west walls, screening overlooks, softening the approach." },
  { k: "priv", n: "06", name: "Privacy", body: "Sightlines tested between units and from the street. Bedrooms are never entered through shared space." },
  { k: "vastu", n: "07", name: "Vastu", body: "Cardinal orientation, entry placement and zoning resolved at plan stage wherever the family asks for it." },
  { k: "tech", n: "08", name: "Technology", body: "Conduit, load and network provisions laid in during structure, so automation is a choice later rather than a retrofit." },
  { k: "sust", n: "09", name: "Sustainability", body: "Solar-ready roofs, rainwater recharge and daylight-first planning — measured rather than claimed." },
];

export type Stage = { n: string; title: string; body: string };

export const STAGES: Stage[] = [
  { n: "01", title: "Idea", body: "A conversation about how a family wants to live. Orientation, budget, and the number of rooms that actually get used." },
  { n: "02", title: "Sketch", body: "Hand studies of massing and approach. Where the light lands in the morning, where the car stops, where the home begins." },
  { n: "03", title: "Blueprint", body: "Dimensioned drawings, structural grid, services routing. Approvals, setbacks and Vastu resolved on paper before anything is cast." },
  { n: "04", title: "Structure", body: "Foundation, columns, slabs. The part nobody sees once it is finished, and the part that decides whether it lasts." },
  { n: "05", title: "Architecture", body: "Façade, apertures, thresholds. Material meets proportion and the building starts to hold a character of its own." },
  { n: "06", title: "Home", body: "Handover. Keys, documents, a walkthrough, and a building that behaves the way the drawings promised." },
];

export type Phase = "ongoing" | "completed";

export type Project = {
  name: string;
  city: string;
  cat: string;
  phase: Phase;
  status: string;
  src: string;
  concept: string;
  rows: [label: string, value: string][];
};

export const PROJECTS: Project[] = [
  {
    name: "Shanvi Residences",
    city: "Tirupati",
    cat: "Gated community",
    phase: "ongoing",
    status: "Under construction",
    src: IMG.community,
    concept: "A two-acre gated development planned around a shared green spine, with parking pushed to the perimeter. Placeholder concept copy, pending verified project data.",
    rows: [["Typology", "Gated community"], ["Units", "96 homes"], ["Handover", "2027"], ["Stage", "Structure · 62%"]],
  },
  {
    name: "Shanvi Heights",
    city: "Visakhapatnam",
    cat: "Apartments",
    phase: "ongoing",
    status: "Under construction",
    src: IMG.towers,
    concept: "Three towers stepped down a sloping site so every home holds a sea-facing aspect. Placeholder concept copy, pending the project brief.",
    rows: [["Typology", "Three towers"], ["Units", "240 homes"], ["Handover", "2030"], ["Stage", "Superstructure"]],
  },
  {
    name: "The Grande Villa",
    city: "Hyderabad",
    cat: "Villas",
    phase: "completed",
    status: "Completed · 2024",
    src: IMG.villaWarm,
    concept: "A row of independent villas on a compact urban site, each turned so its garden and its bedrooms face away from the neighbour. Placeholder concept copy, pending the project brief.",
    rows: [["Typology", "Independent villas"], ["Units", "24 villas"], ["Handover", "2024"], ["Stage", "Handed over"]],
  },
];

export type Material = { name: string; use: string; source: string; src: string; body: string };

export const MATERIALS: Material[] = [
  { name: "Italian Marble", use: "Living floors", source: "Imported slab, book-matched", src: IMG.stone, body: "Selected slab by slab rather than by name. Veining is matched across a floor so the joints read as one continuous surface." },
  { name: "Teak", use: "Doors, joinery", source: "Seasoned hardwood", src: IMG.interior, body: "Kiln-seasoned before it reaches site, which is what keeps a door square through a monsoon and a summer." },
  { name: "Natural Stone", use: "Plinth, walls", source: "Regional quarry", src: IMG.stone, body: "Local stone on the plinth and boundary walls. It weathers into the site instead of away from it." },
  { name: "Architectural Glass", use: "Windows", source: "Double-glazed units", src: IMG.facade, body: "Low-emissivity units sized to the sun path, so daylight arrives without the heat behind it." },
  { name: "Metal", use: "Railings, screens", source: "Powder-coated steel", src: IMG.facade, body: "Steel sections detailed thin and powder-coated in a single tone, so the frame recedes and the view does not." },
  { name: "Wood", use: "Ceilings", source: "Engineered veneer", src: IMG.interior, body: "Engineered panels for anything long or overhead, where solid timber would move." },
  { name: "Lighting", use: "Throughout", source: "Specified per room", src: IMG.living, body: "Layered rather than central: task, wash and accent circuits, each on separate switching." },
];

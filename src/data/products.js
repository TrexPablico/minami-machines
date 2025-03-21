// src/data/products.js
import product1 from "../assets/Products/img01.jpg";
import product2 from "../assets/Products/img02.png";
import product3 from "../assets/Products/img03.jpg";
import product4 from "../assets/Products/img04.jpg";
import product5 from "../assets/Products/img05.jpg";
import product6 from "../assets/Products/img06.jpg";
import product7 from "../assets/Products/img07.jpg";
import product8 from "../assets/Products/img08.jpg";
import product9 from "../assets/Products/img09.jpg";
import product10 from "../assets/Products/img10.jpg";
import product11 from "../assets/Products/img11.jpg";
import product12 from "../assets/Products/img12.jpg";
import product13 from "../assets/Products/img13.jpg";

import product15 from "../assets/Products/img15.png";
import product16 from "../assets/Products/img16.jpg";
import product17 from "../assets/Products/img17.jpg";
import product18 from "../assets/Products/img18.jpg";
import product19 from "../assets/Products/img19.jpg";
import product20 from "../assets/Products/img20.jpg";
import product21 from "../assets/Products/img21.jpg";
import product22 from "../assets/Products/img22.jpg";
import product23 from "../assets/Products/img23.jpg";
import product24 from "../assets/Products/img24.jpg";
import product25 from "../assets/Products/img25.jpeg";
import product26 from "../assets/Products/img26.jpeg";
import product27 from "../assets/Products/img27.jpeg";
import product28 from "../assets/Products/img28.jpeg";
import product29 from "../assets/Products/img29.jpeg";
import product30 from "../assets/Products/img30.jpeg";
import product31 from "../assets/Products/img31.jpeg";
import product32 from "../assets/Products/img32.jpeg";

import altproduct1 from "../assets/Products/img01.png";

const products = [
  {
    name: "MK-D13",
    category: "Machineries",
    image: product1,
    image2: altproduct1,
    traySize: "310 x 160mm",
    numberOfPcb: "2-50",
    stencilSizeMk: "X:650mm x Y: 550mm",
    productivity: "UPH 1,000 or over",
    reapeatability: "±0.025mm",
    directionOfSettingWork: "Left->Right/Right->Left",
    pringDirection: "Front<->Rear",
    distributionLine: "Front: 900±20mm",
    uiLanguage: "Japanese, English, Chinese, Korean",
    powerSupplyUtility: "Single phase 200v-240v Frequency 50/60Hz",
    machineWeight: "Approx. 900",
    layOut: "1870（W）×1287（D）×1460（H）mm",
    features: [
      "Multi Alignment Max: 50pcs/Tray Simultaneous printing of multiple pieces of individual PCB on Tray.",
      "High Accuracy ±0.025mm Position correction of each piece by image recognition.",
      "Adipiscing elit.",
      "Hign-speed UPH: 1000 or over * At 50pcs PCB on the tray",
      "Rotary squeege method(Option)",
    ],
  },
  {
    name: "MK-888SV(MA)",
    category: "High accuracy special printer",
    image: "product2", // Replace with the actual import path
    type: ["M", "LL"],

    screenFrameSize: [
      ["600mm", "550mm", "25-30mm"],
      ["650mm", "550mm"],
      ["750mm", "650mm", "25-40mm"],
    ],

    accommodatedPcbSizeMa: [
      ["Minimum", "50mm", "50mm", "0.4-2.5mm"],
      ["Maximum", "330mm", "250mm"],
    ],

    standardPrinting: [
      ["Minimum", "100mm", "100mm", "0.4-2.5mm"],
      ["Maximum", "540mm", "500mm"],
    ],

    twoStageSolderThicknessPrinting: [
      ["Minimum", "100mm", "100mm", "0.4-2.5mm"],
      ["Maximum", "330mm", "200mm"],
    ],

    conveyorHeight: "900±50mm",

    overallSize: [
      ["1235mm", "1570mm", "1572mm"],
      ["2080mm", "1570mm", "1572mm"],
    ],

    weight: ["800kg", "950kg"],

    repetitiveAccuracy: "±0.015mm or less",
    powerUsed: "AC200V 2KVA 50/60Hz",

    features: [
      "Multiple substrates simultaneous printing function is added to the existing MK-888SV.",
      "Printing on multiple substrates can be performed simultaneously as a batch in high accuracy.",
      "It can handle BGA bump of Φ0.2mm, QFP with 0.3mm lead pitch and fine pattern with the world top class printing positioning repetitive accuracy (±0.015mm or less when image recognition is used).",
      "Position of multiple substrates (2〜desired number) is corrected one by one by a work positioning manipulator.",
      "Cartridge type detachable cleaning unit enables easy replacement of cleaning cotton.",
      "The cleaning unit can be switched between cotton type and adhesive tape type by one action.",
    ],
  },

  {
    name: "MK-838SV",
    category: "High accuracy special printer",
    image: product3,
    screenFrameSize: [{ X: "650mm", Y: "550mm", T: "25-30mm" }],
    examplesOfPrintingWork: "Eight-inches or less wafer",
    substrate: [
      "Ceramic substrate",
      "Cavity substrate",
      "FPC sheet",
      "Lead Frame",
      "Each green sheet substrate",
      "Glass sheet MAX: 250×330mm",
    ],
    overallSize: [{ D: "1215mm", W: "1870mm", H: "1572mm" }],
    weight: ["800kg"],
    repetitivePositioningAccuracy: "±0.003mm or less",
    powerUsed: "AC200V 2KVA 50/60Hz",
    imageProcessingMethod: "Multi value pattern matching",
    standardAccessory: "Linear scale",
    customizationFeatures: [
      "Repeated accuracy for printing positioning",
      "Image recognition method",
      "Work transfer method (conveyer, robot, wafer handler, catapult, etc.)",
      "Work backup jig",
      "Mask separation method",
      "Squeegee printing method",
      "Squeegee shape",
      "Rotary squeegee (N2 can be enclosed)",
      "Overall equipment size",
      "Various screen types",
      "Others",
    ],
    features: [
      "It can accommodate eight inches wafer.",
      "It can accommodate mask frame size of 650mm×550mm.",
      "It can print CSP bumps of Φ0.05mm with the world’s highest class accuracy in repetitive printing positioning (±0.003mm or less when image recognition is used).",
      "Because of simple operation and simple structure, high skill level is not required for the operator.",
      "Operator friendly 'Windows XP' is used as the OS, and the language can be selected from Japanese, English and Chinese.",
      "By using the rotary squeegee, deterioration and the consumption amount of solder can be suppressed. It contributes to manufacturing of high-quality products and also to the cost reduction.",
    ],
  },
  {
    name: "MK-BP1888",
    category: "Ball Placer with Screen Printer",
    image: product4,
    pcbSize: { weight: "70〜110mm", length: "200〜260mm" },
    ballSize: { min: "0.085mm", max: "0.30mm", "r&dMin": "0.055mm" },
    ballPitch: "0.12mm〜1.27mm",
    solderBall: "Lead-Free & Normal Sn-Pb",
    flux: "Water soluble and Fat-solubility all",
    productivity: "23sec/1PCB (240x77.5mm)",
    accuracy: {
      xAxis: "0.02mm",
      yAxis: "0.02mm",
      thetaAxis: "0.02mm",
      fluxPrinting: "0.02mm",
      ballPlacing: "0.02mm",
    },
    controlRobot:
      "Uniform Flux Printing, Uniform Ball Placing, Control Pressure Range: 0.1〜10.0kgf/cm2",
    powerSupplyUtility: "Single phase 200~240V ±10%, Frequency: 50/60Hz ±0.2Hz",
    usedAirUtility:
      "Air pressure (CDA): 0.49MPa / 100NL/min, N2 pressure: 0.3MPa / 300NL/min",
    powerOutageCompensation: "UPS",
    directionOfSettingWork: "Left → Right",
    distributionLine: "Height: From floor 950±10mm",
    soundLevel: "Less than 75DB",
    uiLanguage: "English/Korean/Chinese/Japanese",
    bodyColor: "Cover: SUS304, Frame: Black",
    machineWeight: "2000kg",
    ehsInformation: "SEMI S2 (excepting item16) standard",
    layOut: "1,990mm (L) × 1,305mm (W) × 1,750mm (H) (excepting tower lamp)",
    features: [
      "Compact machine which integrates flux printing and ball placing.",
      "Automatic flux supply unit which holds 2 syringes.",
      "Automatic ball supply unit which holds 4 ball jars.",
      "Stencils cut down your expenses for jigs.",
      "In-line-style for a wide use.",
    ],
  },
  {
    name: "MK-BP2000",
    category: "Ball Placer with Screen Printer",
    image: product5,
    printingPositioningRepetitiveAccuracy:
      "±0.015mm or less (when image recognition is used)",
    screenDimensions: [
      { side: "Printer", dimensions: "(X)750mm×(Y)750mm×(T)25〜40mm" },
      { side: "Ball placer", dimensions: "(X)750mm×(Y)750mm×(T)25〜40mm" },
    ],
    applicableWorkDimensions: [
      {
        side: "Printer",
        minimum: "(X)50mm×(Y)50mm×(T)0.5mm",
        maximum: "(X)480mm×(Y)304.8mm×(T)5mm",
      },
      {
        side: "Ball placer",
        minimum: "(X)50mm×(Y)50mm×(T)0.5mm",
        maximum: "(X)480mm×(Y)304.8mm×(T)5mm",
      },
    ],
    placingSpecifications: {
      minimum: "60〜80µm",
      minimumPitch: "120µm",
    },
    taktTime: [
      { side: "Printer", time: "Approx. 10 sec." },
      { side: "Ball placer", time: "Approx. 30 sec." },
    ],
    boardSpecifications: {
      size: "245mm×197mm",
      numberOfPlacedBalls: 116000,
      srOpening: "70〜100µm",
      pitch: "150µm",
      ballDiameter: "85µm",
    },
    externalDimensionAndWeight: "(D)1255mm×(W)2320mm×(H)1280mm, Approx. 1200kg",
    powerSource: "AC200V 2KVA 50/60Hz",
    options: [
      "Spring type print pressure unit",
      "Servo print pressure unit",
      "Rotary squeegee unit",
      "With a built-in load cell for rotary squeegee unit",
      "Adhesive type cleaning unit",
      "Top surface cleaning unit",
      "Cleaning solvent tank residual amount sensor",
      "Air conditioner retrofit",
      "UPS",
      "FOUP opener",
      "Work transfer mechanism",
      "Work aligner",
    ],
    features: [
      "This is a solder ball placing machine which accomplishes solder ball placing automatically onto wafers or substrates of 50mm×50mm 〜 480mm×304.8mm size.",
      "All moving parts are controlled by servo motors, and this equipment is a highly functional and highly precision solder ball placing machine.",
      "Because the solder ball placing head scatters the solder balls without touching them by air curtain method, stable solder ball supply is accomplished without damaging or deforming the solder balls.",
      "Because the distance between the printed work and the stencil can be controlled, ball placing can be continued without contaminating the stencil.",
      "Uniquely designed head does not allow any ball from the previous work to remain precluding the risk of different size balls getting mixed when setting up for the next work using a different size ball.",
    ],
  },

  {
    name: "MK-BP5000",
    category: "Ball Placer with Screen Printer",
    image: product6,
    stencilSize: ["750mm x 750mm", "736mm x 736mm"],
    pcbSize: {
      dual: "200mm x 60mm - 250mm x 250mm",
      single: [
        "50mm x 60mm - 360mm x 370mm",
        "50mm x 60mm - 360mm x 170mm, φ300mm",
      ],
      thickness: "0.1mm - 2.5mm",
    },
    performance: {
      productivity: "Type Dual: 20 secs / 1 sheet (Optimal conditions)",
      repeatabilityAccuracy: "±0.01mm",
    },
    specifications: {
      powerSupplyUtility: "3 phase 200V - 240V",
      frequency: "50/60Hz",
      usedAirUtility: "0.49MPa: 800NL/min",
      directionOfSettingWork: ["Left → Right", "Right → Left"],
      distributionLine: "From floor 900±20mm",
      uiLanguage: "Japanese/English/Chinese/Korean",
      machineWeight: "Approx. 2700kg",
      printingDirection: "Front ↔ Rear / Left ↔ Right",
      visionFov: "13.5mm x 10.8mm",
      softwareOperatingSystem: "Windows 10",
      layout:
        "Dual type: (W)3040mm x (D)1800mm x (H)2000mm (Except tower/monitor/FFU)",
    },
    features: [
      "New Transfer system: Quality stabilization and high productivity by the Dual Table Transfer System.",
      "20 sec/pcs at the PCB Type Dual Optimal conditions.",
      "Each process at the PCB type Dual corresponds to one stencil (flux stencil / ball stencil: 1 pc on each).",
      "Unique Technology (Rotary Squeegee/Cyclone head).",
      "Ball Size: φ60um ～φ600um.",
      "Automatic solder ball supply / Automatic flux supply.",
    ],
  },
  {
    name: "MK-BP5000IR",
    category: "Ball Inspection & Rework",
    image: product7,
    workSize: {
      type: "Dual",
      maxDimensions: "(X)305mm×(Y)250mm",
      thickness: "0.08～2.5mm",
      warpage: "Max. 10mm",
    },
    ballSize: {
      min: "φ45µm",
      max: "φ600µm",
    },
    performances: {
      reworkProductivity: "8 sec / 2 balls (2 Head) - For missing balls",
      repeatability: "±10µm",
    },
    specifications: {
      powerSupplyUtility: "3Φ 200V～240V",
      frequency: "50/60Hz",
      usedAirUtility: "0.5MPa, 900NL/min",
      directionOfSettingWorkIr: {
        standard: "Left → Right",
        option: "Right → Left",
      },
      distributionLine: "From floor 950±10mm",
      uiLanguage: "Japanese/English/Chinese/Korean",
      machineWeight: "Approx. 2,400kg",
      inspectionCamera: "67M Pixel (CMOS), 5.68um/Pixel (×0.44, Telecentric)",
      layout: "2,230mm(W) x 1,750mm(D) x 2,085mm(H) (except tower/monitor)",
    },
    features: [
      "New Transfer system: Dual Table Transfer System provides stable quality and high productivity.",
      "Solder ball Inspection System: High speed & accuracy inspection.",
      "Solder Ball Rework System: Handles rework for ball sizes φ45µm～φ600µm, including missing balls, double balls, and misalignment.",
      "Repeatability accuracy: ±10µm.",
    ],
  },

  {
    name: "PLA-400",
    category: "Laser Reflow",
    image: product8,
    specifications: {
      uph: "24,000ea (PCB Size: 240*77.4mm / 138 unit on PCB / Global 3 Shot) *UPH depends on the number of dies or PKG per shot",
      stageTemperature: "Max 150℃ (±5℃) *Pre-Heating",
      laserPower: "500 ~ 4,000W",
      laserWarranty: {
        source: "5 years on laser source",
        system: "2 years on laser system",
      },
      homogenizerBeamSize: "□30mm ~ 85mm (Programmable)",
      substrates: {
        single: "L: 100~330mm / W: 62~330mm / Up to 12 inch wafer",
        dual: "L: 100~330mm / W: Max 110mm",
      },
      index: {
        substrate: "Shuttle, etc.",
        wafer: "Clean robot",
      },
      optionalItems: [
        "Beam Profiler",
        "Power Meter",
        "IR Camera",
        "Warpage Control System",
      ],
    },
    features: [
      "Low Thermal Stress Bonding: Localized heating only for die area (Substrate / Wafer) with well-defined beam shaping laser.",
      "Less Warpage Bonding (Substrate / Wafer): Less thermal budget/stress (Bump type: < 1 sec, Die: < 2 sec).",
      "High Productivity Bonding: Quick solder melting: < 1 sec laser emission. Flexible beam/shot options: 30~85 mm (single/global shot).",
      "Space Saving: Compact size: Approximately 1.5m (conventional reflow furnace size: Approximately 5m).",
      "Low Running Cost: N2 unnecessary.",
    ],
  },

  {
    name: "MK-D11",
    category: "Screen Printer",
    image: product9, // Replace with the correct image variable
    pcbSizemkd: {
      x: "50〜510mm",
      y: "50〜460mm",
      thickness: "0.4〜6.0mm",
    },
    stencilSize: ["650mm×550mm", "750×650", "29in×29in"],
    performances: {
      productivity: "6 sec (Without printing)",
      repeatabilityAccuracy: "±0.015mm",
    },
    specifications: {
      powerSupplyUtility: "Single phase 200〜240V",
      frequency: "50/60Hz",
      usedAirUtility: "0.49MPa：40L/min",
      directionOfSettingWork: ["Left→Right", "Right→Left"],
      distributionLine: "From floor 900±20mm",
      uiLanguage: "Japanese / English / Chinese / Korean",
      machineWeight: "Approx. 850kg",
      printingDirection: "Front ⇔ Rear",
      visionFov: "Approx. 8.8 x 6.6mm",
      layout: "1360mm(W) x 1500mm(D) x 1375mm(H) (except tower/monitor)",
    },
    options: [
      "Solder Automatic supply (Jar of 500g)",
      "Open Rotary Squeegee Unit",
      "UPS",
      "Not complex 2D inspection",
      "PWB Warpage correction",
      "L-size PCB waiting conveyor / When selecting: W=1620mm",
      "Z Clamp mechanism",
      "Table backup PWB Vacuum",
    ],
    features: [
      "High-speed 6 sec/Cycle: High-speed distribution by 6 sec/Cycle (Without printing). This is realized by printing on the distribution line.",
      "Repeatability accuracy ±0.015mm.",
      "Open rotary squeegee method (Option).",
      "Not complex 2D inspection function (Solder inspection and mask opening inspection - Option).",
      "PCB clamping function in Z direction (Option).",
    ],
  },

  {
    name: "MK-878SV",
    category: "Screen Printer",
    image: product10, // Replace with the correct image variable
    type: ["M", "L"],
    screenFrameSizeMk: [
      "(X)600×(Y)550mm (T)25〜30mm",
      "(X)650×(Y)550mm",
      "(X)750×(Y)650mm (T)25〜40mm",
      "(X)29'×(Y)29'",
    ],
    accommodatedPcbSizeMk: [
      {
        type: "M",
        minimum: "(X)50×(Y)50mm (T)0.4〜2.5mm",
        maximum: "(X)330×(Y)250mm",
      },
      {
        type: "L",
        minimum: "(X)50×(Y)50mm (T)0.4〜2.5mm",
        maximum: "(X)460×(Y)360mm",
      },
    ],
    overallSizeMk: ["(D)1235×(W)1570×(H)1497mm", "(D)1045×(W)1710×(H)1520mm"],
    weight: ["700kg", "760kg"],
    repeatabilityAccuracy: "±0.015mm or less",
    powerUsed: "AC200V 2KVA 50/60Hz",
    imageProcessingMethod: "Multi value pattern matching",
    basicCycleTime: {
      mType:
        "8 seconds (Squeegee traveling time and mask separation time are excluded)",
      lType:
        "11 seconds (Squeegee traveling time and mask separation time are excluded)",
    },
    pcbFixingMethod:
      "Combined use of substrate suction and external Y clamping by universal block (fixed by a magnet).",
    options: [
      "Rotary Squeegee Unit",
      "Servo pressure printing system",
      "Automatic pressure printing system",
      "Conveyer cover",
      "Automatic conveyer width adjustment system",
      "Ceramic substrate conveyer",
      "Universal table",
      "Pressurized mask release system",
      "Backup jig dedicated to a work",
      "Adaptor & squeegee for various screen frames",
      "Adhesive tape type cleaning unit",
      "Substrate support pin jig",
      "Retrofit type temperature and humidity regulator (air conditioner)",
    ],
    features: [
      "It is possible to meet various needs of users by customizing.",
      "It is compatible with fine pattern, BGA bump of Φ0.2mm, and QFP of 0.3mm lead pitch with the world's top-class repetitive positioning accuracy (±0.015mm or less when using image recognition).",
      "Eight axes servo motors are used for a rotary squeegee version machine, and stability is secured for the basic operations where high accuracy is required. Moreover, the basic operational cycle time is shortened to 8 seconds (M Type) by making the linkage of each operation more closely and by software improvement.",
      "Because of simple operation and simple structure, a high skill level is not required for the operator.",
      "The direction of PCB conveyor, line configuration (fixed side conveyor), and mask design standards can be freely selected at no charge so there is no impact to the user's equipment planning, and the existing mask can be used. It can be connected to any type of mounters.",
      "Operator-friendly 'Windows XP' is used as the OS, and the language can be selected from Japanese, English, and Chinese.",
      "By using the rotary squeegee (option), deterioration and the consumption amount of solder can be suppressed. It contributes to manufacturing high-quality products and cost reduction.",
    ],
  },

  {
    name: "MK-MINI",
    category: "General-purpose type Screen Printer",
    image: product11, // Replace with the correct image variable
    screenFrameDimensions: "(X)550×(Y)650mm, center reference",
    applicableWorkDimensionsMini: {
      minimum: "(X)50×(Y)50mm",
      maximum: "(X)330×(Y)250mm",
    },
    workFixingMethod: "Vacuum sucking (table dimension: 400×320mm)",
    metalStencilFixingMethod:
      "Cylinder clamp (adjustable range: X, Y direction ±5 or less, θ direction ±1.5°)",
    powerSource: "AC200V（0.5KVA）",
    usedAir: "0.49Mpa or higher (approx. 40NL/min)",
    machineDimension: "(D)1100×(W)910×(H)749mm (excluding signal tower)",
    machineWeight: "350kg",
    features: [
      "Simple positioning mechanism is applicable to both high-mix low-volume production to high volume production.",
      "The squeegee drive unit employs AC induction motor and belt enabling speed control within the range of 10〜90mm/sec.",
      "Floating squeegee helps to realize uniform solder amount and good printing quality.",
      "Because AC servo motor is used for the printing table, adjustment can be made for the board thickness, clearance, stencil separation distance and speed.",
      "High quality is realized at low price.",
      "Selection can be made from various models.",
      "MINI-Ⅰ: Model where the squeegee travels back and forth.",
      "MINI-Ⅱ: Model where the squeegee travels left and right.",
    ],
  },

  {
    name: "MK-888SV",
    category: "High specification type Screen Printer",
    image: product12, // Replace with the correct image variable
    type: ["M", "L"],
    screenFrameSizeSv: [
      "(X)600×(Y)550mm (T)25〜30mm",
      "(X)650×(Y)550mm",
      "(X)750×(Y)650mm (T)25〜40mm",
      "(X)29'×(Y)29'",
    ],
    accommodatedPcbSizeSv: [
      {
        type: "M",
        minimum: "(X)50×(Y)50mm (T)0.4〜2.5mm",
        maximum: "(X)330×(Y)250mm",
      },
      {
        type: "L",
        minimum: "(X)50×(Y)50mm (T)0.4〜2.5mm",
        maximum: "(X)460×(Y)360mm",
      },
    ],
    overallSizeSv: ["(D)1235×(W)1570×(H)1572mm", "(D)1195×(W)1780×(H)1572mm"],
    weight: ["900kg", "980kg"],
    repeatabilityAccuracy: "±0.015mm or less",
    powerUsed: "AC200V 2KVA 50/60Hz",
    imageProcessingMethod: "Multi value pattern matching",
    basicCycleTime: {
      mType:
        "8 seconds (Squeegee traveling time and mask separation time are excluded)",
      lType:
        "11 seconds (Squeegee traveling time and mask separation time are excluded)",
    },
    pcbFixingMethod:
      "Combined use of substrate suction and external Y clamping by universal block (fixed by a magnet)",
    standardAccessory: [
      "Pressurized mask separation unit",
      "Rotary Squeegee Unit",
      "C/V automatic width adjustment unit",
      "Servo control cleaning unit",
      "Ceramic substrate conveyer",
    ],
    options: ["Linear scale", "Backup jig dedicated to a work"],
    features: [
      "Full spec machine with all necessary features.",
      "It is compatible to fine pattern, BGA bump of Φ0.2mm and QFP of 0.3mm lead pitch with the world's top-class repetitive positioning accuracy (±0.015mm or less when using image recognition).",
      "Eight axes servo motors are used for a rotary squeegee version machine, and stability is secured for the basic operations where high accuracy is required. Moreover, the basic operational cycle time is shortened to 8 seconds (M Type) by making the linkage of each operation more closely and by software improvement.",
      "Because of simple operation and simple structure, high skill level is not required for the operator.",
      "The direction of PCB conveyor, line configuration (fixed side conveyor), and mask design standards can be freely selected at no charge so that there is no impact to the user's equipment planning, and the existing mask can be used. It can be connected to any type of mounters.",
      'Operator friendly "Windows XP" is used as the OS, and the language can be selected from Japanese, English, and Chinese.',
      "By using the rotary squeegee (option), deterioration and the consumption amount of solder can be suppressed. It contributes to manufacturing of high-quality products and also to cost reduction.",
    ],
  },

  {
    name: "MK-888SV(LL)",
    category: "High specification type Screen Printer",
    image: product13, // Replace with the correct image variable
    typeSs: "LL",
    screenFrameSizeLl: "(X)750×(Y)750mm (T)25〜40mm",
    accommodatedPcbSizeLl: {
      standardPrinting: {
        minimum: "(X)100×(Y)100mm (T)0.4〜2.5mm",
        maximum: "(X)540×(Y)500mm",
      },
      twoStageSolderThicknessPrinting: {
        minimum: "(X)100×(Y)100mm (T)0.4〜2.5mm",
        maximum: "(X)330×(Y)200mm",
      },
    },
    overallSizeLl: "(D)1430×(W)2080×(H)1572mm",
    weightSs: "950kg",
    repeatabilityAccuracySs: "±0.015mm or less",
    powerUsedSs: "AC200V 2KVA 50/60Hz",
    imageProcessingMethodSs: "Multi value pattern matching",
    pcbFixingMethodSs:
      "Combined use of substrate suction and external Y clamping by universal block (fixed by a magnet)",
    standardAccessory: [
      "Pressurized mask separation unit",
      "Rotary Squeegee Unit",
      "C/V automatic width adjustment unit",
      "Servo control cleaning unit",
      "Ceramic substrate conveyer",
    ],
    options: ["Linear scale", "Backup jig dedicated to each work"],
    features: [
      "In addition to the standard spec of MK-888SV, it can accommodate large-sized PCB and large-sized mask.",
      "By equipping with two-stage solder thickness function, it is possible to print even if micro components and standard-sized components co-exist on a PCB.",
      "It is compatible to fine pattern, BGA bump of Φ0.2mm and QFP of 0.3mm lead pitch with the world's top-class repetitive positioning accuracy (±0.015mm or less when using image recognition).",
      "Because of simple operation and simple structure, high skill level is not required for the operator.",
      "The direction of PCB conveyor, line configuration (fixed side conveyor), and mask design standards can be freely selected at no charge so that there is no impact to the user's equipment planning, and the existing mask can be used. It can be connected to any type of mounters.",
      'Operator friendly "Windows XP" is used as the OS, and the language can be selected from Japanese, English, and Chinese.',
      "By using the rotary squeegee, deterioration and consumption amount of solder can be suppressed. It contributes to manufacturing high-quality products and cost reduction.",
    ],
  },

  {
    name: "PLR-100",
    category: "Laser Reflow",
    image: product15,
  },
  {
    name: "PCB Magazine Loader",
    category: "Loader / Unloader",
    image: product16,
  },
  {
    name: "PCB Magazine Unloader",
    category: "Loader / Unloader",
    image: product17,
  },
  {
    name: "AC/DC Motor & Driver",
    category: "Spare Parts",
    image: product18,
  },
  {
    name: "Adhesive Tape",
    category: "Spare Parts",
    image: product19,
  },
  {
    name: "Cotton Rolls",
    category: "Spare Parts",
    image: product20,
  },
  {
    name: "Conston Spring",
    category: "Spare Parts",
    image: product21,
  },
  {
    name: "Hytalex Tape",
    category: "Spare Parts",
    image: product22,
  },
  {
    name: "Ball Screw",
    category: "Spare Parts",
    image: product23,
  },
  {
    name: "Stencils (Metal/Eform/Mesh)",
    category: "Spare Parts",
    image: product24,
  },
  {
    name: "Alpine Conveyor",
    category: "Conveyor",
    image: product25,
  },
  {
    name: "Inclined Conveyor",
    category: "Conveyor",
    image: product26,
  },
  {
    name: "Spiral Conveyor",
    category: "Conveyor",
    image: product27,
  },
  {
    name: "Wedge Conveyor",
    category: "Conveyor",
    image: product28,
  },
  {
    name: "Dovetails",
    category: "Microscope",
    image: product29,
  },
  {
    name: "Measuring Scopes",
    category: "Microscope",
    image: product30,
  },
  {
    name: "Airpits",
    category: "Microscope",
    image: product31,
  },
  {
    name: "Lens",
    category: "Microscope",
    image: product32,
  },
  // Add more products as needed
];

export default products;

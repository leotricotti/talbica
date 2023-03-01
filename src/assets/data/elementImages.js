const elementImages = [
  {
    id: 1,
    url: require("../images/elements-backgrounds/Ag.jpg"),
  },
  {
    name: "Al",
    url: require("../images/elements-backgrounds/Al.jpg"),
  },
  {
    name: "Ar",
    url: require("../images/elements-backgrounds/Ar.jpg"),
  },
  {
    name: "Au",
    url: require("../images/elements-backgrounds/Au.jpg"),
  },
  {
    name: "B",
    url: require("../images/elements-backgrounds/B.jpg"),
  },
  {
    name: "Ba",
    url: require("../images/elements-backgrounds/Ba.jpg"),
  },
  {
    name: "Be",
    url: require("../images/elements-backgrounds/Be.jpg"),
  },
  {
    name: "Bi",
    url: require("../images/elements-backgrounds/Bi.jpg"),
  },
  {
    name: "Br",
    url: require("../images/elements-backgrounds/Br.jpg"),
  },
  {
    name: "C",
    url: require("../images/elements-backgrounds/C.jpg"),
  },
  {
    name: "Ca",
    url: require("../images/elements-backgrounds/Ca.jpg"),
  },
  {
    name: "Cd",
    url: require("../images/elements-backgrounds/Cd.jpg"),
  },
  {
    name: "Ce",
    url: require("../images/elements-backgrounds/Ce.jpg"),
  },
  {
    name: "Cl",
    url: require("../images/elements-backgrounds/Cl.jpg"),
  },
  {
    name: "Co",
    url: require("../images/elements-backgrounds/Co.jpg"),
  },
  {
    name: "Cr",
    url: require("../images/elements-backgrounds/Cr.jpg"),
  },
  {
    name: "Cs",
    url: require("../images/elements-backgrounds/Cs.jpg"),
  },
  {
    name: "Cu",
    url: require("../images/elements-backgrounds/Cu.jpg"),
  },
  {
    name: "Dy",
    url: require("../images/elements-backgrounds/Dy.jpg"),
  },
  {
    name: "Er",
    url: require("../images/elements-backgrounds/Er.jpg"),
  },
  {
    name: "Eu",
    url: require("../images/elements-backgrounds/Eu.jpg"),
  },
  {
    name: "F",
    url: require("../images/elements-backgrounds/F.jpg"),
  },
  {
    name: "Fe",
    url: require("../images/elements-backgrounds/Fe.jpg"),
  },
  {
    name: "Ga",
    url: require("../images/elements-backgrounds/Ga.jpg"),
  },
  {
    name: "Gd",
    url: require("../images/elements-backgrounds/Gd.jpg"),
  },
  {
    name: "Ge",
    url: require("../images/elements-backgrounds/Ge.jpg"),
  },
  {
    name: "H",
    url: require("../images/elements-backgrounds/H.jpg"),
  },
  {
    name: "He",
    url: require("../images/elements-backgrounds/He.jpg"),
  },
  {
    name: "Hf",
    url: require("../images/elements-backgrounds/Hf.jpg"),
  },
  {
    name: "Hg",
    url: require("../images/elements-backgrounds/Hg.jpg"),
  },
  {
    name: "Ho",
    url: require("../images/elements-backgrounds/Ho.jpg"),
  },
  {
    name: "I",
    url: require("../images/elements-backgrounds/I.jpg"),
  },
  {
    name: "In",
    url: require("../images/elements-backgrounds/In.jpg"),
  },
  {
    name: "Ir",
    url: require("../images/elements-backgrounds/Ir.jpg"),
  },
  {
    name: "K",
    url: require("../images/elements-backgrounds/K.jpg"),
  },
  {
    name: "Kr",
    url: require("../images/elements-backgrounds/Kr.jpg"),
  },
  {
    name: "La",
    url: require("../images/elements-backgrounds/La.jpg"),
  },
  {
    name: "Li",
    url: require("../images/elements-backgrounds/Li.jpg"),
  },
  {
    name: "Lu",
    url: require("../images/elements-backgrounds/Lu.jpg"),
  },
  {
    name: "Mg",
    url: require("../images/elements-backgrounds/Mg.jpg"),
  },
  {
    name: "Mo",
    url: require("../images/elements-backgrounds/Mo.jpg"),
  },
  {
    name: "N",
    url: require("../images/elements-backgrounds/N.jpg"),
  },
  {
    name: "Na",
    url: require("../images/elements-backgrounds/Na.jpg"),
  },
  {
    name: "Nb",
    url: require("../images/elements-backgrounds/Nb.jpg"),
  },
  {
    name: "Nd",
    url: require("../images/elements-backgrounds/Nd.jpg"),
  },
  {
    name: "Ne",
    url: require("../images/elements-backgrounds/Ne.jpg"),
  },
  {
    name: "Ni",
    url: require("../images/elements-backgrounds/Ni.jpg"),
  },
  {
    name: "O",
    url: require("../images/elements-backgrounds/O.jpg"),
  },
  {
    name: "Os",
    url: require("../images/elements-backgrounds/Os.jpg"),
  },
  {
    name: "P",
    url: require("../images/elements-backgrounds/P.jpg"),
  },
  {
    name: "Pb",
    url: require("../images/elements-backgrounds/Pb.jpg"),
  },
  {
    name: "Pd",
    url: require("../images/elements-backgrounds/Pd.jpg"),
  },
  {
    name: "Po",
    url: require("../images/elements-backgrounds/Po.jpg"),
  },
  {
    name: "Pr",
    url: require("../images/elements-backgrounds/Pr.jpg"),
  },
  {
    name: "Pt",
    url: require("../images/elements-backgrounds/Pt.jpg"),
  },
  {
    name: "Ra",
    url: require("../images/elements-backgrounds/Ra.jpg"),
  },
  {
    name: "Rb",
    url: require("../images/elements-backgrounds/Rb.jpg"),
  },
  {
    name: "Re",
    url: require("../images/elements-backgrounds/Re.jpg"),
  },
  {
    name: "Rh",
    url: require("../images/elements-backgrounds/Rh.jpg"),
  },
  {
    name: "Ru",
    url: require("../images/elements-backgrounds/Ru.jpg"),
  },
  {
    name: "S",
    url: require("../images/elements-backgrounds/S.jpg"),
  },
  {
    name: "Sb",
    url: require("../images/elements-backgrounds/Sb.jpg"),
  },
  {
    name: "Sc",
    url: require("../images/elements-backgrounds/Sc.jpg"),
  },
  {
    name: "Se",
    url: require("../images/elements-backgrounds/Se.jpg"),
  },
  {
    name: "Si",
    url: require("../images/elements-backgrounds/Si.jpg"),
  },
  {
    name: "Sm",
    url: require("../images/elements-backgrounds/Sm.jpg"),
  },
  {
    name: "Sn",
    url: require("../images/elements-backgrounds/Sn.jpg"),
  },
  {
    name: "Sr",
    url: require("../images/elements-backgrounds/Sr.jpg"),
  },
  {
    name: "Ta",
    url: require("../images/elements-backgrounds/Ta.jpg"),
  },
  {
    name: "Tb",
    url: require("../images/elements-backgrounds/Tb.jpg"),
  },
  {
    name: "Tc",
    url: require("../images/elements-backgrounds/Tc.jpg"),
  },
  {
    name: "Te",
    url: require("../images/elements-backgrounds/Te.jpg"),
  },
  {
    name: "Ti",
    url: require("../images/elements-backgrounds/Ti.jpg"),
  },
  {
    name: "Tl",
    url: require("../images/elements-backgrounds/Tl.jpg"),
  },
  {
    name: "Tm",
    url: require("../images/elements-backgrounds/Tm.jpg"),
  },
  {
    name: "U",
    url: require("../images/elements-backgrounds/U.jpg"),
  },
  {
    name: "V",
    url: require("../images/elements-backgrounds/V.jpg"),
  },
  {
    name: "W",
    url: require("../images/elements-backgrounds/W.jpg"),
  },
  {
    name: "Xe",
    url: require("../images/elements-backgrounds/Xe.jpg"),
  },
  {
    name: "Y",
    url: require("../images/elements-backgrounds/Y.jpg"),
  },
  {
    name: "Yb",
    url: require("../images/elements-backgrounds/Yb.jpg"),
  },
  {
    name: "Zn",
    url: require("../images/elements-backgrounds/Zn.jpg"),
  },
  {
    name: "Zr",
    url: require("../images/elements-backgrounds/Zr.jpg"),
  },
];

export default elementImages;

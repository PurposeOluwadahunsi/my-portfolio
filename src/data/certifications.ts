export interface Certification {
  name: string;
  issuer: string;
  image: string;
}

// Drop the actual certificate files in public/certificates/ using
// these exact filenames, or tell me your real filenames and I'll
// swap the `image` paths — everything else works the same either way.
export const certifications: Certification[] = [
  {
    name: "JobberMan Soft-Skill Training",
    issuer: "JobberMan",
    image: "/certificates/aa.jpeg",
  },
  {
    name: "Zindi Competition",
    issuer: "Zindi Africa",
    image: "/certificates/bb.jpeg",
  },
  {
    name: "Indabax Nigeria",
    issuer: "Indabax",
    image: "/certificates/cc.jpeg",
  },
    {
    name: "Python for Data Science and Machine Learning",
    issuer: "Data Science Nigeria",
    image: "/certificates/dd.jpeg",
  },
];
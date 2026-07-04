/**
 * Brand photography manifest. Files live in `public/photos/`.
 * Real Thaurus brand shots (team, office, staff portrait, app-on-mobile).
 */
export type Photo = {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
};

export const photos = {
  team: {
    src: "/photos/team.webp",
    alt: "The Thaurus team in front of the company logo wall",
    width: 1536,
    height: 1024,
  },
  office: {
    src: "/photos/office.webp",
    alt: "Specialists working on the Thaurus trading floor",
    width: 1536,
    height: 1024,
  },
  portrait: {
    src: "/photos/portrait.webp",
    alt: "A Thaurus specialist at the company office",
    width: 1086,
    height: 1448,
  },
  appPhone: {
    src: "/photos/app-phone.webp",
    alt: "Thaurus website open on a phone, held by a team member",
    width: 1086,
    height: 1448,
  },
  // MetaTrader 5 on laptop + phone (trade on desktop & mobile).
  mt5Devices: {
    src: "/photos/mt5-devices.webp",
    alt: "MetaTrader 5 running on a laptop and a smartphone",
    width: 1400,
    height: 1050,
  },
} satisfies Record<string, Photo>;

export const CITIES = [

  //  Brazil — Minas Gerais (home region)
    { name: "Vila Xurupita (Vila Nova MG)", country: "Brazil", lat: -17.17645101396276, lon: -41.49924728003758 },
    { name: "Belo Horizonte", country: "Brazil", lat: -19.9167, lon: -43.9345 },
    { name: "João Monlevade", country: "Brazil", lat: -19.8126, lon: -43.1734 },
    { name: "Teófilo Otoni", country: "Brazil", lat: -17.8597, lon: -41.5052 },
    

    //  Finland — major cities
    { name: "Helsinki", country: "Finland", lat: 60.1699, lon: 24.9384 },
    { name: "Kuopio", country: "Finland", lat: 62.8951, lon: 27.6627 },
    { name: "Jyväskylä", country: "Finland", lat: 62.2426, lon: 25.7473 },
    
    //  Finland — where I lived
    { name: "Iisalmi", country: "Finland", lat: 63.5592, lon: 27.1907 },
    { name: "Sonkajärvi", country: "Finland", lat: 63.6720, lon: 27.5216 },

    
] as const;

export type City = (typeof CITIES)[number];
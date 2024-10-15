export type ProductType = {
    name: string
    shortDescription:string
    description: string
    imageUrl : string
    price: number
}

export const products:ProductType[] = [
    {
        name: 'Airpods Pro',
        shortDescription: 'Wireless Noise Canceling Earphones',
        description: 'Design to deliver active noise cancellation for immersive sound. Transparency mode for listening surroundings.',
        imageUrl: '/airpod-pro.png',
        price: 250
    },
    {
        name: 'Airpods Max',
        shortDescription: 'Wireless Noise Canceling Earphones',
        description: 'Introducing AirPods Max— a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.',
        imageUrl: '/airpod-max.png',
        price: 1000
    },
    {
        name: 'Apple Watch Ultra',
        shortDescription: 'Yellow Ocean Band',
        description: 'The aerospace-grade titanium case strikes the perfect balance of weight, durability, and corrosion resistance.',
        imageUrl: '/apple-watch.png',
        price: 799
    },
    {
        name: 'Apple Watch Series 8',
        shortDescription: 'Y41mm Silver Stainless Steel Case with Midnight Sport Band',
        description: 'The aerospace-grade titanium case strikes the perfect balance of weight, durability, and corrosion resistance.',
        imageUrl: '/apple-watch.png',
        price: 749
    },
    {
        name: 'Airpods Max Sky Blue',
        shortDescription: 'Wireless Noise Canceling Earphones',
        description: 'Introducing AirPods Max— a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.',
        imageUrl: '/airpod-pro-sky.png',
        price: 1000
    }
]
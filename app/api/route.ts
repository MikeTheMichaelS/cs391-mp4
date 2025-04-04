import { NextRequest, NextResponse } from 'next/server';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     let userQuery = req.query;
//     const CAT_API_KEY = process.env.CAT_API_KEY;
//     let apiKeyString = `&api_key=${CAT_API_KEY}`;
//     const CAT_API_ENDPOINT = "https://api.thecatapi.com/v1/images/search?";
//     let url = CAT_API_ENDPOINT + new URLSearchParams(userQuery as any) + apiKeyString;
//     console.log(url);
//     print();
//     res.status(200).json({ message: "Hello from the API!" });
// }

export async function GET(req: NextRequest) {
    const CAT_API_KEY = process.env.CAT_API_KEY;
    let apiKeyString = `&api_key=${CAT_API_KEY}`;
    const CAT_API_ENDPOINT = "https://api.thecatapi.com/v1/images/search?";
    const queryParams = req.nextUrl.searchParams.toString();
    const url = CAT_API_ENDPOINT.concat(queryParams).concat(apiKeyString);
    // console.log(url);

    try {
        const response = await fetch(url);
        const data = await response.json();
        return NextResponse.json(data, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error("Error fetching cat images:", error);
        return NextResponse.json({ error: "Error fetching cat images" }, {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
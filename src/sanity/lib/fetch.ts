import { createClient } from "next-sanity";

const client = createClient({
    projectId: "k0zc2kil", // Replace with your actual project ID
    dataset: "production", // Replace with your dataset
    token: "skpTekvcZaKJwVzn2PXxEMSVksHIUJB1AvNzITbXumW6XsGHTnWCaxNf53RH0gzzQEP0Lp6hb9UXRgbztN229g2TJkwja5uOtWr352zAWJ1p5C7ltsLxTHxa8Woi18FN2eqCba5YhG8XaLFrTINiJkRLwi9XKW87LYrRG0h3jctZpjcunXwB", // Securely handle this token
    useCdn: false, // Use `false` when using a token
    apiVersion: "2023-10-10", // API version to use
});

/**
 * Fetch data from Sanity
 * @param query - The GROQ query string
 * @param params - Optional parameters for the query
 * @returns The fetched data
 */
export async function sanityfetch({
    query,
    params = {},
}: {
    query: string;
    params?: Record<string, unknown>;
}) {
    try {
        return await client.fetch(query, params);
    } catch (error) {
        console.error("Error fetching data from Sanity:", error);
        throw error; // Rethrow the error for further handling
    }
}











// import { createClient } from "next-sanity";

// const client= createClient({
//     projectId:"k0zc2kil",
//     dataset:"production",
//     token:"skpTekvcZaKJwVzn2PXxEMSVksHIUJB1AvNzITbXumW6XsGHTnWCaxNf53RH0gzzQEP0Lp6hb9UXRgbztN229g2TJkwja5uOtWr352zAWJ1p5C7ltsLxTHxa8Woi18FN2eqCba5YhG8XaLFrTINiJkRLwi9XKW87LYrRG0h3jctZpjcunXwB",
//     useCdn:true,
//     apiVersion:"2023-10-10"
// })
// export async function sanityfetch((query , params ={});(query:string, params?:any)){
// return await client.fetch(query , params)
//  }


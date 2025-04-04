import { breedInfo } from "@/types";

export default function BreedDetail({ breedInfoData }: { breedInfoData: breedInfo }) {
    // console.log(breedInfoData);
    return (
        <div className="flex flex-col items-center justify-center ">
            <h3 className="text-2xl font-semibold">{breedInfoData.name}</h3>
            <p className="text-base p-30">{breedInfoData.description}</p>
            <div className="flex flex-col items-center mt-4">
                <ul className="list-disc list-inside">
                    <li><strong>Origin:</strong> {breedInfoData.origin}</li>
                    <li><strong>Life Span:</strong> {breedInfoData.life_span}</li>
                    <li><strong>Temperament:</strong> {breedInfoData.temperament}</li>
                    {/* <li><strong>Weight:</strong> {breedInfoData.weight.imperial} lbs</li> */}
                </ul>
            </div>
        </div>
    );
}
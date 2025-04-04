import { catProp } from "@/types";
import Link from "next/link";

export default function Image({ props }: { props: catProp }) {
    console.log(props);
    return (
        <>
            {props.breeds && props.breeds.length > 0 ? (
                <Link href={`/breeds/${props.breeds[0].id}`} className="flex justify-center items-center m-4">
                    {/* <div className="flex justify-center items-center m-4"> */}
                    <img
                        className="rounded-lg shadow-lg"
                        src={props.url}
                        alt={`Cat with id ${props.id}`}
                        width={props.width}
                        height={props.height}
                    />
                    {/* </div> */}
                </Link>
            ) : (
                <div className="flex justify-center items-center m-4">
                    <img
                        className="rounded-lg shadow-lg max-w-20vw"
                        src={props.url}
                        alt={`Cat with id ${props.id}`}
                    />
                </div>
            )}
        </>
    );
}
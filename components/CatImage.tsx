import { catProp } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function CatImage({ props }: { props: catProp }) {
    console.log(props);
    return (
        <>
            {props.breeds && props.breeds.length > 0 ? (
                <Link href={`/breeds/${props.breeds[0].id}`} className="flex justify-center items-center m-4">
                    <Image
                        className="rounded-lg shadow-lg"
                        src={props.url}
                        alt={`Cat with id ${props.id}`}
                        width={props.width || 300}
                        height={props.height || 300}
                    />
                </Link>
            ) : (
                <Image
                    className="rounded-lg shadow-lg"
                    src={props.url}
                    alt={`Cat with id ${props.id}`}
                    width={props.width || 300}
                    height={props.height || 300}
                />
            )}
        </>
    );
}
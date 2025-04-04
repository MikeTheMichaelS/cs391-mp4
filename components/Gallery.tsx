import { catProps } from "@/types";
import Image from "./Image";

export default function Gallery({ props }: { props: catProps }) {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {props.map((cat) => (
                <Image key={cat.id} props={cat} />
            ))}
        </div>
    );
}
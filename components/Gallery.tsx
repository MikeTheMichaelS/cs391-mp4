import { catProps } from "@/types";
import CatImage from "./CatImage";

export default function Gallery({ props }: { props: catProps }) {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {props.map((cat) => (
                <CatImage key={cat.id} props={cat} />
            ))}
        </div>
    );
}
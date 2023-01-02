import { IconBaseProps } from "react-icons";
import React from "react";
import { MdStar, MdStarOutline } from "react-icons/md";
import styled from "./Rating.module.scss";

const starRating = [1, 2, 3, 4, 5];

type Props = {
    rating: number;
} & IconBaseProps; // using react icon defined types

const Rating = ({ rating, size, ...rest }: Props) => (
    // IconBaseProps allows ys to use the ...rest parameter
    <div className={styled.wrapper}>
        {starRating.slice(0, rating).map((star) => (
            // using slice to split array into filled and not filled
            <MdStar {...rest} size={size ?? 24} key={star} className={styled.filled} />
        ))}
        {starRating.slice(rating).map((star) => (
            <MdStarOutline {...rest} size={size ?? 24} key={star} />
        ))}
    </div>
);

export default Rating;

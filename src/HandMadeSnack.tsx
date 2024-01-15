import React from 'react';
import { Snack } from './model/pet';

// Snack Type 가져오기
// Snack Type에서 price만 뺀 타입을 가져오고 싶어요
interface OwnProps extends Omit<Snack, 'price'> {
    //추가 하고싶은 사항들 추가하기
    showHandMadeSnackName(name: string): string;
    //return type
}

/**
 * interface = extends로 확장
 * type = &로 확장
 *
 * type OwnProps  = Snack & {
 *     showHandMadeSnackName(name: string): string;
 * }
 */

// OwnProps 가져오기 / 읽어올 수 있음
const HandMadeSnack: React.FC<OwnProps> = ({ name, showHandMadeSnackName }) => {
    return (
        <>
            <p style={{ fontWeight: '800' }}>HandMadeSnack입니다</p>
            <div>{name}</div>
            {/* <div>{price}</div> */}
        </>
    );
};

export default HandMadeSnack;

// type을 쓸 수 있도록 export!
export type Pet = {
    name: string;
    species: string;
    age: number;
    // 타입안에 타입만들기
    owner: Owner;
    // snack은 type이 Snack인 Array[]가 된다.
    snack: Snack[];
};

//type Alias
// ts type 대문자로 설정하는 것이 관례 (다른 변수와 헷갈리니까)

export type Owner = {
    name: string;
    gender: string;
    age: number;
};

export type Snack = {
    name: string;
    price: number;
};

// Owner 에서 Gender속성 생략 -> ?로도 대체가 가능해요
export type OwnerWithOutGender = Omit<Owner, 'gender'>;
// Pet type에서 species만 가져올래요
export type PetOnlySpecies = Pick<Pet, 'species'>;


/**
 * omit VS ?
 * ?를 사용하면 간단하게 타입 검사를 할 수 있지만,
 * 정말 특정 타입의 그 속성이 필요한 경우에도 제대로 검사 없이 넘어갈 수 있으니 사용하는 데에 주의가 필요하다.
 */

export type ApiResponse<T> = {
    data: T[],
    totalPage: number,
    page: number
}

// typescript에서 api구성하기 돌려막기가능
export type PetResponse = ApiResponse<Pet>
export type SnackResponse = ApiResponse<Snack>
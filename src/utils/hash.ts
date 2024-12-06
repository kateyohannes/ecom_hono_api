
export async function hashPassword(password : string){
    return await Bun.password.hash(password,{
        algorithm : "bcrypt",
        cost : 8
    }) as string
}

export async function verifyPassword(password : string, hash : string){
    return await Bun.password.verify(password, hash)
}

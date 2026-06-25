function Input({nome, id}: { nome: string, id: string }) {
    return (
        <>
            <input type="text" name={nome} id={id} />
        </>
    );
}

export default Input;
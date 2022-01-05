import Button from "@mui/material/Button";

const Pagination = ( { n, active, onChange } ) => {
    const arr = new Array( n ).fill(0).map( (i, a) => a + 1  );
    return (
        <div>
            {
                arr.map( el => (
                    <Button key={el} variant="contained" onClick={(el)=>onChange(el)} color={el===active ? "primary": "secondary"}>{el}</Button>
                ))
            }
        </div>
    )
};

export default Pagination;
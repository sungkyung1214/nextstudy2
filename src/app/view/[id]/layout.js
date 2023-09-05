export default function Layout(props) {
    return(
        <>
             {/* page.js내용없이 */}
            {/* <h1>상세페이지: {props.params.id}</h1> */}

            {/*  page.js내용 있으면 children*/}
            <h2>{props.chidren}</h2>
        </>
    );
}
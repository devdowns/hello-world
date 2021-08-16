function Button1(props:any){
    console.log(props);
    return <button onClick={()=> alert('hi')}>{props.children}</button>
}

export default Button1
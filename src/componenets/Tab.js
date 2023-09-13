function Tab({children}){
return(
    <div>{children}</div>
)
}
Tab.Panel= function({title}){
    return(
        <div>{title}</div>
    )
}

export default Tab;

function Childrent_Comp(props) {
    console.log('tham so cua childrent', props);

    return (
        <>
            <div>username cua childrent: {props.userName}</div>
        </>
    );
}

export default Childrent_Comp;  

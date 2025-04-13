import {useState} from "react";


function KullaniciPanosu(props){
    const {ad, yas, aktiflik, hobiler} = props.Ogrenci;

    const [showHobi, setShowStatus] = useState(false);

    return (
        <>
        <div className="card">
            <h1>{ad}</h1>
            <h2>yaş: {yas}</h2>
            <h3 style={aktiflik ? {color:"green"} : {color:"red"}}>durum: {aktiflik ? "Aktif" : "Pasif"}</h3>
            <ul style={{marginRight:"1rem"}}>
            {showHobi  && ( 
                            hobiler.map((item, i) => { return <li key={i}>{item}</li>})
                          )
            }
            </ul>
            <button onClick={() => setShowStatus(!showHobi)}>{showHobi ? "Gizle" : "Detay Göster"}</button>
        </div>
        </>
    );
}

export default KullaniciPanosu;
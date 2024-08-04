import React, { useCallback, useState } from 'react';
import { productSegments as segments } from '../productsSegment';
import { getData as defaultData } from '../Data/Exterior/GetData';
import { getData as interiorData } from '../Data/Interior/GetData';

import '../css/productsSection.css';
import customButton from '../css/Button.module.css';


export default function ProductsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, setData] = useState(defaultData);
    const changeData = useCallback((importedData) => {
        setData(() => importedData);
    }, [setData]);

    return (
        <div className='container'>
            <div className="btn-group" role="group" aria-label="Basic example" style={{ width: '100%', marginTop: '3%', justifyContent: 'space-evenly' }}>
                {segments.map((item, index) => (
                    <button
                    className={`${customButton.button} ${activeIndex === index ? customButton.active : ''}`}
                    key={index}
                    onClick={async () => {
                      setActiveIndex(index);
                      try {
                        switch (index) {
                          case 0:
                            changeData(defaultData);
                            break;
                          case 1:
                            changeData(interiorData);
                            break;
                            case 2:
                            changeData([]);
                            break;
                          default:
                            changeData([]);
                        }
                        document.getElementById('row').classList.add('fade-in');
                        setTimeout(() => {
                          document.getElementById('row').classList.remove('fade-in');
                        }, 500);
                      } catch (e) {
                        console.log(e);
                        changeData([]);
                      }
                    }}
                  >
                    {item}
                  </button>
          
                ))}
            </div>

            <div className='row' id='row' style={{ justifyContent: 'space-evenly', marginTop: '5%', marginBottom: '5%' }}>
                {data.length > 0 ? (
                    data.map((item) => (
                        <div className='card card-main' style={{ width: '18rem', borderRadius: '2rem', height:'80px', marginTop: '1%', flex: 'none' ,alignSelf : 'start'}} key={item.id}>
                            <div style={{ height: '45%', borderRadius: '2.1rem 2.1rem 0 0' }}>
                                
                                    <figure className='image-container container'>
                                        <img style={{ height: '100%', padding: '6%', display: 'block' }} src={require(`../Images/${item.segment}/${item.imageURL}`)} className="card-img-top img-fluid img-responsive" alt="..." />
                                    </figure>
                                
                            </div>

                            <div className="card-body" style={{ paddingTop: "0rem", paddingBottom: '1rem', flex: 'none' }}>
                                <h5 className="card-title">{item.name}</h5>
                                <div className='card-size-price'>
                                    <div className='card-size-price-inside card-size-price-title'>
                                        <p className='card-p'>Available Size</p>
                                        <p className='card-p'>Price</p>
                                    </div>
                                    {item.size.map((sizeItem, index) => (
                                        <div className='card-size-price-inside' key={index}>
                                            <p className='card-p'>{sizeItem.capacity}</p>
                                            <p className='card-p'>{sizeItem.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No Products Found</p>
                )}
            </div>
        </div>
    );
}

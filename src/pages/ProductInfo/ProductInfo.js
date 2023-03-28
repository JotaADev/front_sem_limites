import React, { Component } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import LanguageCard from '../../components/LanguageCard/LanguageCard';
import './ProductInfo.css';

class ProductInfo extends Component {
    render() {
        return (
            <section id='ProductInfo' className='ProductInfoContent'>
                <h2>Tecnologias abordadas</h2>
                <ScrollContainer hideScrollbars style={{width: '80%'}}>
                    <div className='ProductInfoBoxLanguages'>
                        <LanguageCard/>
                        <LanguageCard/>
                        <LanguageCard/>
                        <LanguageCard/>
                        <LanguageCard/>
                        <LanguageCard/>
                        <LanguageCard/>
                        <LanguageCard/>
                        <LanguageCard/>
                        <LanguageCard/>
                    </div>
                </ScrollContainer>
            </section>
        )
    }
}

export default ProductInfo;
import React, { useRef } from 'react';
import { InView } from 'react-intersection-observer';


export default function AnimatedSection(props: any) {
    const ref = useRef();
    return <InView rootMargin='-200px'className='w-full' onChange={(inView, entry) => {
                if (inView) {
                    for(let i = 0; i < entry.target.children.length; i++ ){
                        entry.target.children[i].classList.add("animateChild");
                    }

                } else {
                    for(let i = 0; i < entry.target.children.length; i++ ){
                        entry.target.children[i].classList.remove("animateChild");
                    }
                }
            }}>
                {props.children && (
                    <>
                        {
                            React.Children.map(props.children, child => (
                                React.cloneElement(child, props))
                            )
                        }
                    </>

                )}
            </InView>
}
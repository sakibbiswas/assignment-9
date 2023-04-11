import React from 'react';

const Blogs = () => {
    return (
        <div className='p-20'>
            <div className='border-2 mb-3 '>
                <h2 className='text-xl font-semibold'>When should we use context API?</h2>
                <p><strong>Ans:</strong>
                    Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
            </div>
            <div className='border-2 mb-3 '>
                <h2 className='text-xl font-semibold'>What is custom hook in react?</h2>
                <p><strong>Ans:</strong>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications</p>
            </div>
            <div className='border-2 mb-3 '>
                <h2 className='text-xl font-semibold'>What is useref react?</h2>
                <p><strong>Ans:</strong>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
            <div className='border-2 mb-3 '>
                <h2 className='text-xl font-semibold'>What is usememo react?</h2>
                <p><strong>Ans:</strong>The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example, we have an expensive function that runs on every render. When changing the count or adding a todo, you will notice a delay in execution.
                </p>
            </div>
        </div>
    );
};

export default Blogs;
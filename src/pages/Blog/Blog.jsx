import React, { useRef } from 'react';
import { usePDF } from 'react-to-pdf';

const Blog = () => {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  return (
    <div ref={targetRef} className="mt-20 px-5 lg:px-12">
      <h4 className="text-5xl font-bold text-center">Questions</h4>
      <div className="mt-12">
        <div className="mb-5">
          <h4 className="font-semibold text-xl">
            1. Tell us the differences between uncontrolled and controlled
            components?
          </h4>
          <p className="lg:w-2/3 mt-3">
            <span className="font-semibold text-xl">Ans:</span> A uncontroled
            componet has internal state its can't share his states to other
            components on the other hand a controlled components recive states
            via props in her parent componts .
          </p>
        </div>
        <div className="mb-5">
          <h4 className="font-semibold text-xl">
            2. How to validate React props using PropTypes?
          </h4>
          <p className="lg:w-2/3 mt-3">
            <span className="font-semibold text-xl">Ans:</span> A uncontroled
            componet has internal state its can't share his states to other
            components on the other hand a controlled components recive states
            via props in her parent componts .
          </p>
        </div>
        <div className="mb-5">
          <h4 className="font-semibold text-xl">
            2. How to validate React props using PropTypes?
          </h4>
          <p className="lg:w-2/3 mt-3">
            <span className="font-semibold text-xl">Ans:</span> A uncontroled
            componet has internal state its can't share his states to other
            components on the other hand a controlled components recive states
            via props in her parent componts .
          </p>
        </div>
        <div className="mb-5">
          <h4 className="font-semibold text-xl">
            1. Tell us the differences between uncontrolled and controlled
            components?
          </h4>
          <p className="lg:w-2/3 mt-3">
            <span className="font-semibold text-xl">Ans:</span> A uncontroled
            componet has internal state its can't share his states to other
            components on the other hand a controlled components recive states
            via props in her parent componts .
          </p>
        </div>
      </div>
      <button className="coustom-btn mb-12" onClick={() => toPDF()}>
        Download Pdf
      </button>
    </div>
  );
};

export default Blog;

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            TaskQuill
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              4th Semester Web Technology course Project
            </p>

            <p>
              Tech stack: React, Node js, Express, MongoDB, Typescript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useEffect } from 'react';

const Blog = () => {

    useEffect(() => {
        document.title = "ToyMan|Blog"; // Update the title here
      }, []);
    

    return (
        <div className='my-14 flex flex-col gap-3 p-10'>
            <h1 className='text-red-500 text-2xl font-bold'>Q1:What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <h1 className='text-xl'>An access token is a credential that is used to access protected resources. It is a short lived token and will be expired after some time. Its used to authenticate api requests.
                On the other hand refresh token are long lived and they are They are used to authenticate the client and request a new access token .
                 </h1>
            <h1 className='text-red-500 text-2xl font-bold'>Q2: Compare SQL and NoSQL databases?</h1>
            <p className='text-xl'>Sql is a RDBMS or relational database and NoSQL  is a Non-relational or Distributed Database.
                2.SQL is table based database wheres NoSQL is document based database
                3.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                4.SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.
            </p>
            <h1 className='text-red-500 text-2xl font-bold'>Q3: What is express js? What is Nest JS?</h1>
            <p  className='text-xl'>Express js is an web application framework for Node js and it provide lot of tools to do that job perfectly. Its provides routing, middleware support, and template engeines
                Next js is Anguler inspired web framework provide a robust and structured development experience for building server-side applications.
            </p>
            <h1 className='text-red-500 text-2xl font-bold'>Q4: What is MongoDB aggregate and how does it work?</h1>
            <p className='text-xl'>
            Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape & modify documents that pass through the pipeline
                $match: Filters the documents in the collection based on specified criteria. It works similar to the find operation and uses query operators to define conditions. <br />

1.group: Groups the documents based on a specific field or fields and performs aggregation operations on each group. Aggregation functions like sum, count, average, and more can be used in this stage. <br />

2.project: Shapes the output of the aggregation by specifying which fields to include or exclude from the result. It can also add computed fields or reshape the existing fields. <br />

3.sort: Sorts the documents based on specified fields in ascending or descending order. <br />

4.limit: Limits the number of documents in the result set to a specified number. <br />

5.skip: Skips a specified number of documents in the result set. <br />

6.unwind: Deconstructs an array field, creating a separate document for each element of the array. This stage is useful when working with arrays and performing further operations on array elements. <br />

7.lookup: Performs a left outer join between two collections, retrieving related documents based on matching conditions.</p>
        </div>
    );
};

export default Blog;
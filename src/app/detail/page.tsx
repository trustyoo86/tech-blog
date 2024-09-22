import Image from 'next/image';

const BlogDetail: React.FC = () => {
  const title = "블로그 제목";
  const author = "작성자 이름";
  const date = "2024년 9월 21일";
  // const imageUrl = "이미지 URL"; // 이미지 URL을 여기에 입력하세요.
  const content = `
    여기에 블로그 본문 내용이 들어갑니다. 이 부분은 여러 문단으로 구성될 수 있습니다.
    예를 들어, 텍스트를 강조하고 싶다면 <strong>강조 텍스트</strong>를 사용하면 됩니다.
    추가적인 내용도 여기에 포함될 수 있습니다.
  `;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-gray-600 mb-2">작성자: <span className="font-semibold">{author}</span></p>
      <p className="text-gray-500 mb-6">작성일: <span className="font-semibold">{date}</span></p>
      {/* <Image src={imageUrl} alt="블로그 이미지" className="w-full h-64 object-cover rounded-lg mb-4" /> */}

      <div className="prose mb-6" dangerouslySetInnerHTML={{ __html: content }} />

      <div className="flex items-center mt-6">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">댓글 남기기</button>
        <span className="ml-4 text-gray-500">댓글 수: 12</span>
      </div>
    </div>
  );
};

export default BlogDetail;
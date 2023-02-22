import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { getUserInfoById } from '../../lib';
import { UserInfo } from '../../types';

const User: NextPage = () => {
  const router = useRouter();
  const { userId } = router.query;
  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    getUserInfoById(userId as string).then((userInfo: UserInfo) => {
      setUserInfo(userInfo);
    });
  }, [userId]);

  return userInfo ? (
    <div className="w-96 h-screen flex flex-col gap-2">
      <div className="font-bold text-xl underline decoration-[#FF6600]">
        {userInfo?.id}
      </div>
      <div>
        <span className="font-bold text-lg">created: &nbsp;</span>
        {new Date((userInfo?.created as number) * 1000).toLocaleString()}
      </div>
      <div className="font-bold text-lg">Karma: {userInfo?.karma}</div>
      {userInfo?.about ? (
        <div>
          <span className="font-bold text-lg">About: </span>
          <div
            className="break-word"
            dangerouslySetInnerHTML={{ __html: userInfo.about }}
          ></div>
        </div>
      ) : null}
    </div>
  ) : (
    <Loading />
  );
};

export default User;

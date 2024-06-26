import styled from "styled-components";
import { useRecoilState } from "recoil";
import { navigationState } from "../recoil/navigationState/atom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavigationBarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: white;
  position: fixed;
  bottom: 0;
  border-top: 1px solid ${(props) => props.theme.gray};
  max-width: 390px;
  width: 100%;
  height: 80px;
  position: absolute;
`;

const Text = styled.div`
  font-size: 8px;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-bottom: 12px;
`;

const NavigationBar = () => {
  const location = useLocation();

  const [currentNavigationState, setCurrentNavigationState] =
    useRecoilState(navigationState);

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/mypage") {
      setCurrentNavigationState("MyPage");
    }
  }, [location]);

  return (
    <NavigationBarContainer>
      <Button
        onClick={() => {
          setCurrentNavigationState("Home");
          navigate("/");
        }}
      >
        {currentNavigationState === "Home" ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0957 1.09792C10.4941 0.641839 11.2034 0.641838 11.6018 1.09792L21.6776 12.6306C21.6798 12.6331 21.6829 12.6345 21.6861 12.6345C21.6924 12.6345 21.6975 12.6396 21.6975 12.6458V21.7083C21.6975 22.2606 21.2497 22.7083 20.6975 22.7083H14.1735C13.6212 22.7083 13.1735 22.2606 13.1735 21.7083V16.7342C13.1735 16.1819 12.7258 15.7342 12.1735 15.7342H9.52402C8.97173 15.7342 8.52402 16.1819 8.52402 16.7342V21.7083C8.52402 22.2606 8.0763 22.7083 7.52402 22.7083H1C0.447715 22.7083 0 22.2606 0 21.7083V12.6459C0 12.6396 0.0050836 12.6345 0.0113545 12.6345C0.0146317 12.6345 0.0177494 12.6331 0.0199056 12.6306L10.0957 1.09792Z"
              fill="black"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 22 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_813_4758" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0957 1.09792C10.4941 0.641839 11.2034 0.641838 11.6018 1.09792L21.6776 12.6306C21.6798 12.6331 21.6829 12.6345 21.6861 12.6345C21.6924 12.6345 21.6975 12.6396 21.6975 12.6458V21.7083C21.6975 22.2606 21.2497 22.7083 20.6975 22.7083H14.1735C13.6212 22.7083 13.1735 22.2606 13.1735 21.7083V16.7342C13.1735 16.1819 12.7258 15.7342 12.1735 15.7342H9.52402C8.97173 15.7342 8.52402 16.1819 8.52402 16.7342V21.7083C8.52402 22.2606 8.0763 22.7083 7.52402 22.7083H1C0.447715 22.7083 0 22.2606 0 21.7083V12.6459C0 12.6396 0.0050836 12.6345 0.0113545 12.6345C0.0146317 12.6345 0.0177494 12.6331 0.0199056 12.6306L10.0957 1.09792Z"
              />
            </mask>
            <path
              d="M0.0199056 12.6306L0.772978 13.2886L0.0199056 12.6306ZM11.6018 1.09792L12.3549 0.439985L11.6018 1.09792ZM10.0957 1.09792L9.34261 0.439985L10.0957 1.09792ZM21.6776 12.6306L20.9245 13.2886L21.6776 12.6306ZM22.4307 11.9727L12.3549 0.439985L10.8488 1.75586L20.9245 13.2886L22.4307 11.9727ZM22.6975 21.7083V12.6458H20.6975V21.7083H22.6975ZM14.1735 23.7083H20.6975V21.7083H14.1735V23.7083ZM12.1735 16.7342V21.7083H14.1735V16.7342H12.1735ZM12.1735 16.7342L12.1735 16.7342H14.1735C14.1735 15.6296 13.278 14.7342 12.1735 14.7342V16.7342ZM9.52402 16.7342H12.1735V14.7342H9.52402V16.7342ZM9.52402 16.7342V16.7342V14.7342C8.41945 14.7342 7.52402 15.6296 7.52402 16.7342H9.52402ZM9.52402 21.7083V16.7342H7.52402V21.7083H9.52402ZM1 23.7083H7.52402V21.7083H1V23.7083ZM-1 12.6459V21.7083H1V12.6459H-1ZM9.34261 0.439985L-0.733167 11.9727L0.772978 13.2886L10.8488 1.75586L9.34261 0.439985ZM1 21.7083H-1C-1 22.8129 -0.104569 23.7083 1 23.7083V21.7083ZM7.52402 21.7083V23.7083C8.62859 23.7083 9.52402 22.8129 9.52402 21.7083H7.52402ZM14.1735 21.7083V21.7083H12.1735C12.1735 22.8129 13.0689 23.7083 14.1735 23.7083V21.7083ZM20.6975 21.7083V23.7083C21.802 23.7083 22.6975 22.8129 22.6975 21.7083H20.6975ZM21.6861 13.6345C21.1401 13.6345 20.6975 13.1919 20.6975 12.6458H22.6975C22.6975 12.0873 22.2447 11.6345 21.6861 11.6345V13.6345ZM0.0113545 13.6345C0.303292 13.6345 0.580948 13.5084 0.772978 13.2886L-0.733167 11.9727C-0.545449 11.7578 -0.274029 11.6345 0.0113545 11.6345V13.6345ZM12.3549 0.439985C11.558 -0.472183 10.1395 -0.472182 9.34261 0.439985L10.8488 1.75586V1.75586L12.3549 0.439985ZM1 12.6459C1 13.1919 0.557369 13.6345 0.0113545 13.6345V11.6345C-0.547201 11.6345 -1 12.0873 -1 12.6459H1ZM20.9245 13.2886C21.1166 13.5084 21.3942 13.6345 21.6861 13.6345V11.6345C21.9715 11.6345 22.2429 11.7578 22.4307 11.9727L20.9245 13.2886Z"
              fill="#666666"
              mask="url(#path-1-inside-1_813_4758)"
            />
          </svg>
        )}
        <Text>홈</Text>
      </Button>
      <Button
        onClick={() => {
          setCurrentNavigationState("TrafficSignal");
          navigate("/");
        }}
      >
        {currentNavigationState === "TrafficSignal" ? (
          <svg
            width="15"
            height="30"
            viewBox="0 0 12 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1.20459"
              width="10.7199"
              height="21.5382"
              rx="0.5"
              fill="black"
              stroke="black"
            />
            <circle
              cx="5.85994"
              cy="5.21223"
              r="2.65535"
              fill="white"
              stroke="black"
            />
            <circle
              cx="5.85994"
              cy="11.9737"
              r="2.65535"
              fill="white"
              stroke="black"
            />
            <circle
              cx="5.85994"
              cy="18.7352"
              r="2.65535"
              fill="white"
              stroke="black"
            />
          </svg>
        ) : (
          <svg
            width="15"
            height="30"
            viewBox="0 0 12 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="1.20459"
              width="10.7199"
              height="21.5382"
              rx="0.5"
              stroke="#555D6B"
            />
            <circle cx="5.85994" cy="5.21223" r="2.65535" stroke="#555D6B" />
            <circle cx="5.85994" cy="11.9737" r="2.65535" stroke="#555D6B" />
            <circle cx="5.85994" cy="18.7352" r="2.65535" stroke="#555D6B" />
          </svg>
        )}
        <Text>신호등</Text>
      </Button>
      <Button
        onClick={() => {
          setCurrentNavigationState("Favorites");
          navigate("/");
        }}
      >
        {currentNavigationState === "Favorites" ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9 1.08156L14.9629 7.43057C15.1637 8.04861 15.7396 8.46705 16.3895 8.46705H23.0652C23.5496 8.46705 23.751 9.08685 23.3591 9.37156L17.9583 13.2955C17.4326 13.6774 17.2126 14.3545 17.4134 14.9725L19.4763 21.3215C19.626 21.7822 19.0988 22.1652 18.7069 21.8805L13.3061 17.9566C12.7804 17.5747 12.0685 17.5747 11.5428 17.9566L6.14197 21.8805C5.75012 22.1652 5.22288 21.7822 5.37255 21.3215L7.43547 14.9725C7.63629 14.3545 7.4163 13.6774 6.89057 13.2955L1.48977 9.37156C1.09792 9.08686 1.2993 8.46705 1.78367 8.46705H8.45942C9.10925 8.46705 9.68519 8.04861 9.886 7.43057L11.9489 1.08156C12.0986 0.620904 12.7503 0.620902 12.9 1.08156Z"
              fill="black"
              stroke="black"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.9 1.08156L14.9629 7.43057C15.1637 8.04861 15.7396 8.46705 16.3895 8.46705H23.0652C23.5496 8.46705 23.751 9.08685 23.3591 9.37156L17.9583 13.2955C17.4326 13.6774 17.2126 14.3545 17.4134 14.9725L19.4763 21.3215C19.626 21.7822 19.0988 22.1652 18.7069 21.8805L13.3061 17.9566C12.7804 17.5747 12.0685 17.5747 11.5428 17.9566L6.14197 21.8805C5.75012 22.1652 5.22288 21.7822 5.37255 21.3215L7.43547 14.9725C7.63629 14.3545 7.4163 13.6774 6.89057 13.2955L1.48977 9.37156C1.09792 9.08686 1.2993 8.46705 1.78367 8.46705H8.45942C9.10925 8.46705 9.68519 8.04861 9.886 7.43057L11.9489 1.08156C12.0986 0.620904 12.7503 0.620902 12.9 1.08156Z"
              stroke="#555D6B"
            />
          </svg>
        )}
        <Text>즐겨찾기</Text>
      </Button>
      <Button
        onClick={() => {
          navigate("/mypage");
        }}
      >
        {currentNavigationState === "MyPage" ? (
          <svg
            width="30"
            height="30"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="11.0437"
              cy="11.9265"
              r="10.5437"
              fill="black"
              stroke="black"
            />
            <circle cx="10.8183" cy="9.89826" r="4.00764" stroke="white" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.49442 19.4968C4.93842 16.9927 7.64306 15.3071 10.7414 15.3071C13.9566 15.3071 16.7479 17.1223 18.1464 19.7838C17.9064 20.0395 17.6547 20.2825 17.3923 20.5117C16.211 18.0258 13.6769 16.3071 10.7414 16.3071C7.90968 16.3071 5.45151 17.9064 4.22078 20.2509C3.96736 20.0125 3.72493 19.7608 3.49442 19.4968Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            width="30"
            height="30"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="11.0437" cy="11.9265" r="10.5437" stroke="#555D6B" />
            <circle cx="10.8182" cy="9.89802" r="4.00764" stroke="#555D6B" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.49463 19.4971C4.93864 16.9929 7.64327 15.3074 10.7416 15.3074C13.9569 15.3074 16.7482 17.1226 18.1466 19.7841C17.9066 20.0397 17.6549 20.2827 17.3925 20.512C16.2112 18.026 13.6771 16.3074 10.7416 16.3074C7.9099 16.3074 5.45173 17.9066 4.22099 20.2512C3.96757 20.0127 3.72514 19.761 3.49463 19.4971Z"
              fill="#555D6B"
            />
          </svg>
        )}
        <Text>My</Text>
      </Button>
    </NavigationBarContainer>
  );
};

export default NavigationBar;

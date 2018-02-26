import React from 'react'
import {Svg} from 'expo';
import * as Animatable from 'react-native-animatable';
import {View} from 'react-native-animatable';

const {G, Path} = Svg;

class Cat extends React.Component {
  render() {
    return (
      <View animation="pulse" iterationCount="infinite" duration={2500}>
        <Svg width={241} height={345} viewBox="0 0 241 345">
          <G fill="none" fillRule="evenodd">
            <Path
              d="M89.013 167.716S76.36 158.867 70.731 156.3c-5.942-2.71-20.483-6.624-26.738-7.104-6.256-.48-17.767-3.189-23.85-1.983-6.086 1.205-12.674 2.098-12.674 2.098s18.592 2.422 25.038 5.524c6.448 3.103 14.577 7.738 18.729 12.332 4.153 4.594 12.133 10.441 12.133 11.646 0 1.204 4.585-4.115 9.963-5.673 5.407-1.566 15.681-5.423 15.681-5.423M152.917 168.693s11.865-9.826 17.493-12.393c5.943-2.711 20.484-6.624 26.738-7.104 6.256-.481 17.767-3.19 23.85-1.984 6.086 1.206 12.674 2.098 12.674 2.098s-18.592 2.422-25.038 5.525c-6.447 3.102-15.333 6.839-19.485 11.434-4.152 4.594-11.376 11.339-11.376 12.543 0 1.204-4.586-4.115-9.963-5.672-5.407-1.566-14.893-4.447-14.893-4.447"
              fill="#AFAFAF"
            />
            <Path
              d="M77.146 159.62s-8.054.668-12.675 2.93-10.155 7.508-10.155 7.508l-4.431-4.015s3.81-3.872 9.025-6.522c4.133-2.101 12.488-2.881 12.488-2.881l5.748 2.98zM42.607 160.36s1.565-4.11 4.504-6.17c3.47-2.43 7.787-3.678 7.787-3.678l-5.576-1.202s-2.88.198-6.186 3.346c-3.171 3.02-3.813 5.818-3.813 5.818l3.284 1.885zM25.064 153.233s-.701-.423 1.016-2.87 4.088-3.284 4.088-3.284h-5.246s-.377-.11-1.121 2.246c-.745 2.355-.985 3.294-.985 3.294l2.248.614zM160.467 162.358s8.35-.116 13.33 1.76c4.98 1.876 11.2 6.745 11.2 6.745l4.152-4.594s-4.31-3.622-9.938-5.84c-4.462-1.758-13.133-1.728-13.133-1.728l-5.611 3.657zM195.866 161.4s-2.078-4.306-5.38-6.242c-3.902-2.286-8.567-3.198-8.567-3.198l5.728-1.877s3.044-.079 6.848 3.003c3.65 2.956 4.62 5.93 4.62 5.93l-3.249 2.383zM213.508 153.183s.657-.49-1.29-2.758c-1.946-2.27-4.387-2.872-4.387-2.872l5.221-.508s.365-.146 1.334 2.126c.97 2.272 1.3 3.183 1.3 3.183l-2.178.829z"
              fill="#878787"
            />
            <Path
              d="M178.914 178.812s5.304-6.299 10.234-10.99c5.52-5.251 10.591-8.937 14.81-10.677 7.318-3.018 32.31-7.835 32.31-7.835s2.038 7.206 2.084 11.654c.046 4.448-1.938 25.749-3.87 33.195a272.352 272.352 0 0 1-1.737 6.297c-.794 2.765-1.717 5.928-2.74 9.131-2.556 7.994-12.455 28.499-12.455 28.499s-5.319-15.096-6.47-18.343c-3.316-9.355-9.333-19.52-13.244-24.679-6.129-8.084-18.922-16.252-18.922-16.252M62.227 178.812s-5.304-6.299-10.235-10.99c-5.519-5.251-10.59-8.937-14.809-10.677-7.318-3.018-32.309-7.835-32.309-7.835S2.05 156.564 2 160.91c-.048 4.263.79 21.464 4.661 33.249.52 1.581 1.017 3.793 1.736 6.297.794 2.765.738 6.218 1.948 9.46 6.351 17.014 13.878 29.754 13.878 29.754s4.688-16.68 5.838-19.927c3.316-9.355 9.334-19.52 13.245-24.679 6.128-8.084 18.922-16.252 18.922-16.252"
              fill="#FCA7A7"
            />
            <Path
              d="M25.427 232.977c-7.937 55.56 15.06 78.647 28.447 88.687 13.184 9.888 40.16 18.406 73.626 18.406 33.467 0 65.26-16.733 73.627-28.446 13.085-18.32 19.407-57.065 15.06-75.3-8.366-35.102-25.1-48.527-35.14-55.221 0 0-16.733-15.06-65.26-15.06-4.73 0-8.871.063-12.636.249-13.554.673-22.231 2.962-35.891 9.79-20.08 10.04-38.486 33.468-41.833 56.895"
              fill="#A8A8A8"
            />
            <Path
              d="M25.427 232.977c-7.937 55.56 15.06 78.647 28.447 88.687 13.184 9.888 40.16 18.406 73.626 18.406 33.467 0 65.26-16.733 73.627-28.446 13.085-18.32 19.407-57.065 15.06-75.3-8.366-35.102-25.1-48.527-35.14-55.221 0 0-16.733-15.06-65.26-15.06-4.73 0-8.871.063-12.636.249-13.554.673-22.231 2.962-35.891 9.79-20.08 10.04-38.486 33.468-41.833 56.895z"
              stroke="#070707"
              strokeWidth={1.673}
            />
            <Path
              fill="#878787"
              d="M119.134 214.151l-12.637-47.859 11.8.588h16.733zM106.026 214.151L67.26 176.083l15.51-6.482 9.59-1.565zM134.751 214.57l12.481-45.877 15.044 3.412 10.911 5.667zM148.31 320.558l13.35 13.245 9.91-3.672 9.14-4.49zM91.187 318.885l-13.35 13.245-9.91-3.672-9.14-4.49z"
            />
            <Path
              d="M104.727 250.546c0 18.021-14.61 32.63-32.63 32.63-18.021 0-32.63-14.609-32.63-32.63 0-18.02 13.772-27.61 31.793-27.61 18.02 0 33.467 9.59 33.467 27.61"
              fill="#FFF"
            />
            <Path
              d="M104.727 250.546c0 18.021-14.61 32.63-32.63 32.63-18.021 0-32.63-14.609-32.63-32.63 0-18.02 13.772-27.61 31.793-27.61 18.02 0 33.467 9.59 33.467 27.61z"
              stroke="#070707"
              strokeWidth={1.673}
            />
            <Path
              d="M202.147 252.22c0 18.02-14.61 32.63-32.63 32.63-18.021 0-32.63-14.61-32.63-32.63 0-18.021 13.772-27.61 31.793-27.61 18.02 0 33.467 9.589 33.467 27.61"
              fill="#FFF"
            />
            <Path
              d="M202.147 252.22c0 18.02-14.61 32.63-32.63 32.63-18.021 0-32.63-14.61-32.63-32.63 0-18.021 13.772-27.61 31.793-27.61 18.02 0 33.467 9.589 33.467 27.61z"
              stroke="#070707"
              strokeWidth={1.673}
            />
            <Path
              d="M122.48 276.483a3.347 3.347 0 1 1-6.694 0 3.347 3.347 0 0 1 6.694 0"
              fill="#070707"
            />
            <Path
              d="M91.34 257.24c0 10.628-8.616 19.244-19.244 19.244-10.627 0-19.243-8.616-19.243-19.244 0-10.627 8.616-19.243 19.243-19.243 10.628 0 19.244 8.616 19.244 19.243"
              fill="#5A3E16"
            />
            <Path
              d="M91.34 257.24c0 10.628-8.616 19.244-19.244 19.244-10.627 0-19.243-8.616-19.243-19.244 0-10.627 8.616-19.243 19.243-19.243 10.628 0 19.244 8.616 19.244 19.243z"
              stroke="#111"
              strokeWidth={1.673}
            />
            <Path
              d="M189.597 259.75c0 10.628-8.616 19.243-19.244 19.243s-19.243-8.615-19.243-19.243c0-10.628 8.615-19.244 19.243-19.244 10.628 0 19.244 8.616 19.244 19.244"
              fill="#5A3E16"
            />
            <Path
              d="M189.597 259.75c0 10.628-8.616 19.243-19.244 19.243s-19.243-8.615-19.243-19.243c0-10.628 8.615-19.244 19.243-19.244 10.628 0 19.244 8.616 19.244 19.244z"
              stroke="#111"
              strokeWidth={1.673}
            />
            <Path
              d="M162.64 301.584l55.22-6.694M164.313 306.603h65.26M162.64 311.624l43.507 5.02M79.81 299.91l-55.22-6.693M78.137 304.93h-65.26M79.81 309.95l-43.506 5.02"
              stroke="#070707"
              strokeWidth={1.673}
            />
            <Path
              d="M217.55 238.086c8.367-8.367 18.717-43.597 20.39-63.677 1.673-20.08-1.673-25.099-1.673-25.099s-16.734-5.02-45.18 0c-23.305 4.112-40.16 20.078-40.16 20.078"
              stroke="#070707"
              strokeWidth={4}
            />
            <Path
              d="M236.267 149.31c-.289-.875-25.1 3.346-36.813 10.04-9.747 5.57-21.681 19.462-21.681 19.462"
              stroke="#070707"
              strokeWidth={1.673}
            />
            <Path
              d="M89.013 167.716s-16.387-14.294-39.69-18.406c-28.448-5.02-45.181 0-45.181 0s-3.347 5.02-1.674 25.1c1.673 20.08 13.387 56.893 21.753 65.26"
              stroke="#070707"
              strokeWidth={4}
            />
            <Path
              d="M62.636 178.812s-11.934-13.893-21.68-19.462c-11.714-6.694-36.525-10.914-36.814-10.04"
              stroke="#070707"
              strokeWidth={1.673}
            />
            <Path
              d="M115.787 162.043c-5.339 0-9.297.079-12.835.254-14.341.711-23.448 3.192-37.481 10.208-22.119 11.06-40.625 36.254-44.004 59.906-5.989 41.922 4.107 73.028 30.007 92.452 12.379 9.285 38.853 19.207 76.026 19.207 35.65 0 68.088-17.811 76.882-30.122 13.899-19.458 20.247-59.456 15.696-78.552-8.356-35.057-24.849-49.606-36.616-57.489-2.43-2.022-20.799-15.864-67.675-15.864m0 4c48.526 0 65.26 15.06 65.26 15.06 10.04 6.693 26.773 20.118 35.14 55.22 4.347 18.236-1.975 56.981-15.06 75.301-8.367 11.712-40.16 28.446-73.627 28.446-33.466 0-60.442-8.518-73.627-18.407-13.386-10.039-36.383-33.125-28.446-88.686 3.346-23.427 21.753-46.854 41.833-56.894 13.659-6.83 22.337-9.119 35.89-9.791 3.765-.187 7.908-.249 12.637-.249"
              fill="#070707"
            />
            <Path
              d="M174.818 190.19l-2.227.88a144.497 144.497 0 0 1-108.515-.931 4.19 4.19 0 0 1-2.414-5.054l41.135-139.938a17.781 17.781 0 0 1 2.902-5.74L133.167 3.27c1.16-1.527 3.598-.621 3.478 1.293l-2.777 44.431a63.675 63.675 0 0 0 3.638 25.533l39.715 110.344a4.19 4.19 0 0 1-2.403 5.317"
              fill="#9B3B66"
            />
            <Path
              d="M174.818 190.19l-2.227.88a144.497 144.497 0 0 1-108.515-.931 4.19 4.19 0 0 1-2.414-5.054l41.135-139.938a17.781 17.781 0 0 1 2.902-5.74L133.167 3.27c1.16-1.527 3.598-.621 3.478 1.293l-2.777 44.431a63.675 63.675 0 0 0 3.638 25.533l39.715 110.344a4.19 4.19 0 0 1-2.403 5.317z"
              stroke="#000"
              strokeWidth={5}
            />
            <Path
              d="M175.22 183.875L135.508 73.53a63.666 63.666 0 0 1-3.64-25.534l2.5-38.2c.399-4.744-.772-3.745-1.934-2.217l-8.437 12.844-3.161 40.717 44.174 122.734a4.19 4.19 0 0 1-2.403 5.316l-2.226.88c-15.462 6.112-32.153 7.746-48.467 8.322 21.578 1.07 39.535-2.245 58.679-8.322l2.226-.88a4.19 4.19 0 0 0 2.403-5.316"
              fill="#8A3159"
            />
            <Path
              d="M75.425 136.747l10.917 2.585a136.4 136.4 0 0 0 64.871-.49l8.434-2.132a2.72 2.72 0 0 1 3.197 1.635l3.986 10.044a2.723 2.723 0 0 1-1.967 3.668l-17.06 3.605a136.44 136.44 0 0 1-58.332-.422l-18.16-4.114a2.924 2.924 0 0 1-2.14-3.75l2.795-8.678a2.925 2.925 0 0 1 3.46-1.951"
              fill="#693158"
            />
            <Path
              d="M75.425 136.747l10.917 2.585a136.4 136.4 0 0 0 64.871-.49l8.434-2.132a2.72 2.72 0 0 1 3.197 1.635l3.986 10.044a2.723 2.723 0 0 1-1.967 3.668l-17.06 3.605a136.44 136.44 0 0 1-58.332-.422l-18.16-4.114a2.924 2.924 0 0 1-2.14-3.75l2.795-8.678a2.925 2.925 0 0 1 3.46-1.951z"
              stroke="#000"
              strokeWidth={2}
            />
            <Path
              d="M164.937 146.37c-.465.093-.53.132-1.074.247l-16.061 3.605a136.408 136.408 0 0 1-58.331-.422l-17.161-4.113a6.71 6.71 0 0 1-.802-.182l-.654-.18-.631 1.754c-.527 1.636.193 2.924 1.869 3.304l17.379 3.857a136.44 136.44 0 0 0 58.33.422l16.74-3.64c1.652-.35 1.748-1.76 1.125-3.327l-.73-1.324z"
              fill="#59294B"
            />
            <Path
              fill="#FCC65A"
              d="M160.67 152.942l-3.076.65.503 1.977-11.973 2.636-5.142-19.397 11.21-2.182.36 1.877 5.042-1.275-2.016-5.042-18.894 4.44.97 3.556 4.36 19.153.727 3.26 18.9-4.997z"
            />
            <Path
              d="M115.027 115.451l-8.807 4.257a.646.646 0 0 1-.914-.712l1.978-9.58a.647.647 0 0 0-.166-.578l-6.771-7.06a.646.646 0 0 1 .395-1.089l9.723-1.079a.651.651 0 0 0 .498-.337l4.622-8.62a.646.646 0 0 1 1.158.038l4.03 8.913a.644.644 0 0 0 .475.37l9.627 1.731a.647.647 0 0 1 .32 1.114l-7.23 6.588a.646.646 0 0 0-.205.565l1.328 9.691a.646.646 0 0 1-.96.65l-8.5-4.842a.646.646 0 0 0-.601-.02M132.195 183.77a14.088 14.088 0 0 1-6.15 1.36c-6.472-.035-12.2-4.594-13.684-10.895a14.079 14.079 0 0 1-.053-6.297c.17-.774-.808-1.274-1.32-.666a14.11 14.11 0 0 0-3.048 11.882c1.328 6.717 7.46 11.598 14.304 11.386a14.107 14.107 0 0 0 10.896-5.635c.478-.634-.228-1.477-.945-1.136"
              fill="#DDDCE2"
            />
            <Path
              d="M127.918 298.149s-5.905 2.112-8.003 2.116c-4.128.006-8.002-1.94-8.002-1.94s3.356.76 5.332-1.761c1.357-1.732 2.67-4.466 2.67-4.466s-.066.818 2.565 4.666c1.773 2.593 5.438 1.385 5.438 1.385"
              fill="#EDCACA"
            />
            <Path
              d="M127.918 298.149s-5.905 2.112-8.003 2.116c-4.128.006-8.002-1.94-8.002-1.94s3.356.76 5.332-1.761c1.357-1.732 2.67-4.466 2.67-4.466s-.066.818 2.565 4.666c1.773 2.593 5.438 1.385 5.438 1.385z"
              stroke="#070707"
              strokeWidth={0.756}
            />
            <Path
              d="M107.391 290.635c0 1.13-.755 7.857 6.295 7.856 4.545 0 6.288-7.856 6.288-7.856s.932 7.647 5.839 7.74c6.11.116 5.777-5.256 5.777-7.74"
              stroke="#070707"
            />
          </G>
        </Svg>
      </View>
    );
  }
}

const AnimatableCat = Animatable.createAnimatableComponent(Cat);

export {Cat, AnimatableCat};

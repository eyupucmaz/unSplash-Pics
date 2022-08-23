import React from 'react';
import { unsplash } from './api/unsplash';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import Loading from './components/Loading';
import GradientText from './components/GradientText';
import NavMenu from './components/NavMenu';

interface AppStates {
  imageData: Array<Object> | null;
  status: number | null;
  term: string;
  loading: boolean | null;
}
class App extends React.Component<any, AppStates> {
  constructor(props: Readonly<any>) {
    super(props);
    this.state = {
      imageData: null,
      status: null,
      term: '',
      loading: null,
    };
  }

  onSearchSubmit = async (term: string) => {
    this.setState({ loading: true });
    const { data, status } = await unsplash.get('search/photos', {
      params: { query: term, per_page: 30 },
    });
    this.setState({
      imageData: data?.results,
      status: status,
      term,
      loading: false,
    });
  };

  render() {
    return (
      <>
        {/* NAVBAR */}
        <div className="flex justify-center sm:justify-between flex-wrap bg-white sticky top-0 left-0 z-10">
          <SearchBar onSubmit={this.onSearchSubmit} />
          <NavMenu />
        </div>
        {/* IMAGE LISTING */}
        <div className="w-screen h-100 flex flex-col justify-center items-center pt-9">
          {this.state.loading ? (
            <Loading />
          ) : (
            <>
              {this.state.loading !== null && (
                <GradientText
                  text={`${this.state.imageData?.length} images found for ${this.state.term}`}
                />
              )}
              <ImageList images={this.state.imageData} />
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;

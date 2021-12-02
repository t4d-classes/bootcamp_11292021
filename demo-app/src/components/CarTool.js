
import { ToolHeader } from './ToolHeader';
import { ToolFooter } from './ToolFooter';
import { CarTableContainer } from '../containers/CarTableContainer';
import { CarFormContainer } from '../containers/CarFormContainer';

export const CarTool = () => {

  return (
    <>
      <ToolHeader headerText="Car Tool" />
      <CarTableContainer />
      <CarFormContainer />
      <ToolFooter companyName="A Cool Company, Inc." />
    </>
  );

};
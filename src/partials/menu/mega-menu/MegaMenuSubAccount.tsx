import { TMenuConfig, IMenuItemConfig, MenuSub } from '@/components/menu';
import { MegaMenuSubHighlighted, MegaMenuSubDefault } from './components';

const MegaMenuSubAccount = (items: TMenuConfig) => {
  const myAccountItem = items[2];
  const myAccountItemGeneral = myAccountItem.children ? myAccountItem.children[0] : {};
  const myAccountItemOthers = myAccountItem.children ? myAccountItem.children[1] : {};

  return (
    <MenuSub className="flex-col lg:flex-row gap-0 w-full lg:max-w-[1240px]">
      <div className="lg:w-[250px] mt-2 lg:mt-0 lg:border-r lg:border-r-gray-200 rounded-xl lg:rounded-l-xl lg:rounded-r-none shrink-0 px-3 py-4 lg:p-7.5 bg-light-active dark:bg-coal-500 dark:lg:border-r-coal-100">
        <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
          {myAccountItemGeneral.title}
        </h3>
        <div className="menu menu-default menu-fit flex-col gap-0.5">
          {myAccountItemGeneral.children && MegaMenuSubHighlighted(myAccountItemGeneral.children)}
        </div>
      </div>
      <div className="pt-4 pb-2 lg:p-7.5 lg:pb-5 grow">
        <div className="grid lg:grid-cols-5 gap-5">
          {myAccountItemOthers.children?.map((item: IMenuItemConfig, index) => {
            return (
              <div key={`item-${index}`} className="flex flex-col">
                <h3 className="text-sm text-gray-800 font-semibold leading-none pl-2.5 mb-2 lg:mb-5">
                  {item.title}
                </h3>
                <div className="menu menu-default menu-fit flex-col gap-0.5">
                  {item.children && MegaMenuSubDefault(item.children)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MenuSub>
  );
};

export { MegaMenuSubAccount };

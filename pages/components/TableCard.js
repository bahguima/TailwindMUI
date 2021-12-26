import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Team1 from "../src/assets/img/team-1-800x800.jpg";
import Team2 from "../src/assets/img/team-2-800x800.jpg";
import Team3 from "../src/assets/img/team-3-800x800.jpg";
import Team4 from "../src/assets/img/team-4-470x470.png";

export default function CardTable() {
  return (
    <Card>
      <CardHeader color="blue" contentPosition="left">
        <h2 className="text-white text-2xl">Tabela de Cards</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-2 text-purple-500 align-middle border-b border-solid text-primaryBlue medium font-serif py-3 text-sm whitespace-nowrap font-light text-left">
                  Projeto
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid text-primaryBlue medium font-serif py-3 text-sm whitespace-nowrap font-light text-left">
                  Budget
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid text-primaryBlue medium font-serif py-3 text-sm whitespace-nowrap font-light text-left">
                  Status
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid text-primaryBlue medium font-serif py-3 text-sm whitespace-nowrap font-light text-left">
                  Users
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid text-primaryBlue medium font-serif py-3 text-sm whitespace-nowrap font-light text-left">
                  Completion
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Argon Design System
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  $2,500 USD
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i> pending
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full border-2 border-white">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                  </div>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="red" value="60" />
                </th>
              </tr>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Black Dashboard Sketch
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  $1,800 USD
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i> completed
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full border-2 border-white">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                  </div>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="green" value="100" />
                </th>
              </tr>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  React Material Dashboard
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  $4,400 USD
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <i className="fas fa-circle fa-sm text-teal-500 mr-2"></i> on schedule
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full border-2 border-white">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                  </div>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="teal" value="90" />
                </th>
              </tr>
              <tr>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  React Material Dashboard
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  $2,200 USD
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i> completed
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="flex">
                    <div className="w-10 h-10 rounded-full border-2 border-white">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                      <Image
                        src={
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                        }
                        rounded
                        alt="..."
                      />
                    </div>
                  </div>
                </th>
                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <Progress color="green" value="100" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}

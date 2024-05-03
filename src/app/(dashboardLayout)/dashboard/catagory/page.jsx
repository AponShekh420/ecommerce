"use client";
import CatagoryList from "@/components/dashboardComp/CatagoryList";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@nextui-org/react";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Catagory = () => {
  const [parent, setParent] = useState("");
  const [catagory, setCatagory] = useState("");
  const [parentCatagoryData, setParentCatagoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (!catagory) {
        setNameError("The name field is required");
        return;
      }
      if (parent === "" || parent === "NoParent") {
        // catagory
        setLoading(true);
        const res = await fetch("http://localhost:3000/api/catagory", {
          method: "POST",
          body: JSON.stringify({
            name: catagory,
          }),
        });
        const data = await res.json();
        setLoading(false);
        setNameError("");
        if (data.error) {
          toast.warn(data.error, {
            // position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,
          });
        }
        if (data.message) {
          toast.success(data.message, {
            autoClose: 2000,
          });
          setCatagory("");
          getCatagory();
        }
      } else {
        // subcatagory
        setLoading(true);
        const res = await fetch("http://localhost:3000/api/subcatagory", {
          method: "POST",
          body: JSON.stringify({
            name: catagory,
            parent: parent,
          }),
        });
        const data = await res.json();
        setLoading(false);
        setNameError("");
        if (data.error) {
          toast.warn(data.error, {
            // position: toast.POSITION.TOP_LEFT,
            autoClose: 2000,
          });
        }
        if (data.message) {
          toast.success(data.message, {
            autoClose: 2000,
          });
          setCatagory("");
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const getCatagory = async () => {
    const res = await fetch("http://localhost:3000/api/catagory", {
      method: "GET",
      next: {
        revalidate: 60,
      },
    });
    const actualData = await res.json();
    setParentCatagoryData(actualData);
  };

  useEffect(() => {
    getCatagory();
  }, []);
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Pro Controller
          </h1>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>Catagory Details</CardTitle>
                <CardDescription>
                  Lipsum dolor sit amet, consectetur adipiscing elit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      onChange={(e) => setCatagory(e.target.value)}
                      id="name"
                      type="text"
                      className="w-full"
                      placeholder="Type The Catagory Name"
                      value={catagory}
                    />
                    <p
                      style={{
                        color: "red",
                        padding: "0",
                        fontSize: "13px",
                        marginTop: "-8px",
                      }}
                    >
                      {nameError}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="parentcategory">Parent Category</Label>
                    <Select onValueChange={(value) => setParent(value)}>
                      <SelectTrigger
                        id="category"
                        aria-label="Select Parent Category"
                      >
                        <SelectValue placeholder="Select Parent Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="NoParent">No parent</SelectItem>
                        {parentCatagoryData.map((element, index) => (
                          <SelectItem key={index} value={element._id}>
                            {element.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="hidden items-center gap-2 md:ml-auto md:flex">
                    <Button
                      size="sm"
                      onClick={submit}
                      style={{ width: "100px" }}
                    >
                      {loading ? (
                        <Spinner color="warning" size="sm" />
                      ) : (
                        "Save Product"
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-3">
              <CardHeader>
                <CardTitle>Catagorys List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <CatagoryList />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Catagory;

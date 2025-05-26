import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { initVapi, getVapiInstance } from "./vapi.js";
import { interviewer, questionsArray } from "./Interviewer.jsx";

const Agent2 = () => {
  const userName = "You";
  const userId = 123;
  const interviewId = 11;
  const feedbackId = 111;

  const [interviewType, setInterviewType] = useState("technical");
  const [callStatus, setCallStatus] = useState("INACTIVE");
  const [messages, setMessages] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const navigate = useNavigate();

  const questions = questionsArray;

  const formattedQuestions = useMemo(() => {
    return questions?.map((q) => `- ${q}`).join("\n") || "";
  }, [questions]);

  const setupVapiEvents = useCallback((vapi) => {
    const onCallStart = () => setCallStatus("ACTIVE");
    const onCallEnd = () => setCallStatus("FINISHED");
    const onMessage = (message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setMessages((prev) => [
          ...prev,
          {
            role: message.role,
            content: message.transcript,
          },
        ]);
      }
    };
    const onSpeechStart = () => setIsSpeaking(true);
    const onSpeechEnd = () => setIsSpeaking(false);
    const onError = (err) => console.error("Vapi Error:", err);

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  useEffect(() => {
    let cleanup;
    const setup = async () => {
      await initVapi();
      const vapi = getVapiInstance();
      cleanup = setupVapiEvents(vapi);
    };
    setup();
    return () => {
      if (cleanup) cleanup();
    };
  }, [setupVapiEvents]);

  useEffect(() => {
    if (callStatus === "FINISHED" && interviewType === "generate") {
      navigate("/");
    }
  }, [callStatus, interviewType, navigate]);

  const handleCall = async () => {
    setCallStatus("CONNECTING");
    const vapi = getVapiInstance();
    await vapi.start("17121f31-ae34-4f4b-b372-11f850d960f7", {
      variableValues: {
        username: userName,
        userid: userId,
        type: interviewType,
        interviewId,
        questions, // question vapi ke through database me save ho rha hai hame database se question nikalna padega
      },
    });
  };

  const handleDisconnect = () => {
    const vapi = getVapiInstance();
    vapi.stop();
    setCallStatus("FINISHED");
  };

  const renderCallButton = () => {
    const isIdle = callStatus === "INACTIVE" || callStatus === "FINISHED";
    if (callStatus === "ACTIVE") {
      return (
        <button
          onClick={handleDisconnect}
          className="btn bg-red-600 rounded-lg p-4"
        >
          End
        </button>
      );
    }
    return (
      <>
        <button onClick={handleCall} className="btn rounded-lg bg-blue-500 p-4">
          {isIdle ? "Schedule Interview" : "starting..."}
        </button>
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 py-8 px-4 md:flex-row">
        <ProfileCard
          name="AI Interviewer"
          img="/2.jpg"
          isSpeaking={isSpeaking}
        />
        <ProfileCard name={userName} img="/s7.jpg" />
      </div>

      {messages.length > 0 && (
        <div className="w-full max-w-3xl mx-auto my-4 p-4 border rounded-xl shadow-sm bg-gray-50">
          <div className="space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div key={index} className="flex gap-2">
                <strong>{msg.role}:</strong>
                <span>{msg.content}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="w-full flex flex-wrap justify-center gap-4 mt-6">
        {renderCallButton()}
      </div>
    </>
  );
};

const ProfileCard = ({ name, img, isSpeaking }) => (
  <div className="flex flex-col items-center gap-3 p-4 border rounded-xl shadow-md bg-black text-zinc-100 w-60">
    <div className="relative">
      <img
        src={img}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      {isSpeaking && (
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></span>
      )}
    </div>
    <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
  </div>
);

export default Agent2;
